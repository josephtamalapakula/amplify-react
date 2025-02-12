/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getServiceRequest = /* GraphQL */ `query GetServiceRequest($id: ID!) {
  getServiceRequest(id: $id) {
    id
    serviceRequestName
    serviceRequestDescription
    severity
    resolutionDate
    reporterName
    contactInformation
    currentLocation
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServiceRequestQueryVariables,
  APITypes.GetServiceRequestQuery
>;
export const listServiceRequests = /* GraphQL */ `query ListServiceRequests(
  $filter: ModelServiceRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listServiceRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      serviceRequestName
      serviceRequestDescription
      severity
      resolutionDate
      reporterName
      contactInformation
      currentLocation
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServiceRequestsQueryVariables,
  APITypes.ListServiceRequestsQuery
>;
