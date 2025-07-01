// @type{ import ("drizzle-kit").Config}
export default{
    schema:"./utils/Schema.js",
    dialect:'postgresql',
    dbCredentials:{
     url:"postgresql://neondb_owner:npg_aB2gWusLQ9bO@ep-patient-bar-a1yvftf7-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
    }
}