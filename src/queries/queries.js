import { gql } from "@apollo/client";

const GET_CLIENTS = gql`
  query GetClients {
    UsersInfo {
      id
      email
      firstname
      lastname
      clients {
        id
        name
        sites {
          id
          name
          path
        }
      }
    }
  }
`;

const GET_LOCATIONS = gql`
  query GetLocations($path: String!, $clientId: String!) {
    LocalizationInfo(path: $path, clientId: $clientId) {
      name
      code
      type
      path
      subLocalizations {
        name
        code
        type
        path
        subLocalizations {
          name
          code
          type
          path
          subLocalizations {
            name
            code
            type
            path
            subLocalizations {
              name
              code
              type
              path
              subLocalizations {
                name
                code
                type
                path
                subLocalizations {
                  name
                  code
                  type
                  path
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GET_SENSORS = gql`
  query GetSensors($limit: Int) {
    SensorEntries(limit: $limit) {
      parentName
      sensorType
      parentPath
      createdAt
      status
    }
  }
`;

export { GET_CLIENTS, GET_LOCATIONS, GET_SENSORS };
