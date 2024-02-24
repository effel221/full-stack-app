//declaration of global schema for all graphql mutations/queries with their respective types
import { buildSchema } from 'graphql';
import {
  activitiesQueries,
  allActivitiesSchemasTypes
} from "./activitySchema";


export const schema = buildSchema(`
  ${allActivitiesSchemasTypes}
  type Query {
    ${activitiesQueries}
  }
`)
