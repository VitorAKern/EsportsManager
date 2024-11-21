import { Sequelize } from "sequelize-typescript";
import { config as dotEnvConfig } from "dotenv";

dotEnvConfig();

const sequelize = new Sequelize(
    {
        database: process.env.POSTGRES_DB,
        username: process.env.POSTGRES_USER,
        password: String(process.env.POSTGRES_PASSWORD),
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        dialect: 'postgres',
        models: [__dirname + "/models"]
    }
);

sequelize.authenticate().then(() => {
    console.log("POSTGRES CONNECTION SUCCESS");
}).catch((err) => {
    console.log("POSTGRES CONNECTION FAILURE" + err);
});

sequelize.sync();

export default sequelize;