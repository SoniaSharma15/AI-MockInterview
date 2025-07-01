// @type{ import ("drizzle-kit").Config}
export default{
    schema:"./utils/Schema.js",
    dialect:'postgresql',
    dbCredentials:{
     url:"postgresql://neondb_owner:npg_IL5SiQfyqx3d@ep-morning-sky-a8bzivvo-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
    }
}