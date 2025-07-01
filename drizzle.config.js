// @type{ import ("drizzle-kit").Config}
export default{
    schema:"./utils/Schema.js",
    dialect:'postgresql',
    dbCredentials:{
     url:"postgresql://neondb_owner:npg_GgqWl2SFvQ6m@ep-jolly-breeze-a8gcrvkq-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
    }
}