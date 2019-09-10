import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class GraphdblpApiService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  executeQuery(queryNumber: number, params: any) {
    let queryString = '';

    const neo4jAuth  = '';

    const httpHeaders = new HttpHeaders({
      'Accept': 'application/json; charset=UTF-8',
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': neo4jAuth
    });

    switch (queryNumber) {
      case 1 :
        queryString = 'MATCH (k:keyword)-[s:has_research_topic]-(a:author) WHERE k.key = {key}  WITH k,a,s ORDER BY ' +
        's.relevance desc, s.score desc limit {limit} ' +
        'MATCH path=(k)-[:contains]-(p:publication)-[t:authored]-(a)-[:contributed_to]-(v:venue) WHERE t.venue = v.name ' +
        'RETURN k.key,a.name,count(path) as freq,s.score,s.relevance, collect(distinct v.name) as venues ' +
        'ORDER BY s.relevance desc, s.score desc, freq desc limit {limit}';

        // params is like {'key':'database','limit':10}
        return this.http.post(
          this.config.getNeo4jEndpoint + '/db/data/transaction/commit',
          {
          'statements': [{
            'statement' : queryString,
            'parameters' : params
            }]
          },
          {headers : httpHeaders}
        );
      case 2 :
        const authorNameForlabels = params.author_name.split(' ').join('_');

        queryString = 'MATCH (b:author)-[l:has_research_topic]->(k:keyword)<-[r:has_research_topic]-(a:author) ' +
        'WHERE lower(a.name)={author_name} WITH b,k,l.score as sugg_author_score, l.relevance as sugg_author_relevance,' +
        'r.score as author_score,r.relevance as author_relevance ' +
        'ORDER BY sugg_author_relevance desc, sugg_author_score desc ' +
        'WITH collect([b,author_relevance, author_score, sugg_author_relevance, sugg_author_score]) as researchers_data, k ' +
        'UNWIND researchers_data[0..{limit}] AS r WITH k, (r[0]).name as name, r[3] as sugg_author_relevance, r[4] as sugg_author_score, ' +
        'r[1] as author_relevance, r[2] as author_score OPTIONAL MATCH (k)-[s:similar_to]-(z:keyword_sim) ' +
        'WHERE toFloat(s.score) >= {score_value}' +
        'RETURN k.key as Key, name as B_name, sugg_author_relevance as B_rel, sugg_author_score as B_score,' +
        'author_relevance as ' + authorNameForlabels + '_rel, author_score as ' + authorNameForlabels + '_score,' +
        'collect(z.key+s.score) as Keys_Sim ' +
        'ORDER BY ' + authorNameForlabels + '_score desc, ' + authorNameForlabels + '_rel desc, B_rel desc';

        // params is like {"author_name":author_name.lower(), "limit":limit, "score_value":score_value}
        return this.http.post(
          this.config.getNeo4jEndpoint + '/db/data/transaction/commit',
          {
          'statements': [{
            'statement' : queryString,
            'parameters' : params
            }]
          },
          {headers : httpHeaders}
        );
      case 3 :
      queryString = 'match (a:venue)-[s:similarity]-(b:venue) ' +
      ' where lower(a.name) = {venue_name} and toFloat(s.jaccard_percent) >= {threshold_value} with a, b as neighbours ' +
      'match (a)-[ll:similarity]-()-[r:similarity]-()-[rr:similarity]-(a) where id(a) <> id(neighbours) ' +
      'and id(neighbours) <> 0 and toFloat(ll.jaccard_percent) >= {threshold_value} and toFloat(rr.jaccard_percent) >= {threshold_value} ' +
      'with count(distinct neighbours) as n , count(distinct r) as r, collect(distinct neighbours.name) as nn ' +
      'return n,r, r/(n*1.0*(n-1)/2) as lcc, nn';

      // params is like {"venue_name":venue_name.lower(), "threshold_value":threshold_value}
      return this.http.post(
        this.config.getNeo4jEndpoint + '/db/data/transaction/commit',
        {
        'statements': [{
          'statement' : queryString,
          'parameters' : params
          }]
        },
        {headers : httpHeaders}
      );
    }
  }
}
