// @type{ import ("drizzle-kit").Config}
export default{
    schema:"./utils/Schema.js",
    dialect:'postgresql',
    dbCredentials:{
     url:"postgresql://neondb_owner:npg_aB2gWusLQ9bO@ep-patient-bar-a1yvftf7.ap-southeast-1.aws.neon.tech/Ai%20mockInterview?sslmode=require&channel_binding=require"
    }
}