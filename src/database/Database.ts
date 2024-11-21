import { Sequelize } from "sequelize-typescript";

class Database {
    public sequelize: Sequelize;

    private POSTGRES_DB = process.env.POSTGRES_DB as string;
    private POSTGRES_HOST = process.env.POSTGRES_HOST as string;
    private POSTGRES_PORT = process.env.POSTGRES_PORT as string;
    private POSTGRES_USER = process.env.POSTGRES_USER as string;
    private POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as string;

    constructor() {
        this.sequelize = this.createConnection();
        this.connectToPostgreSQL();
    }

    // init(): void{
    //     this this.sequelize
    // }

    private createConnection(){
        var connection = new Sequelize(
            {
                database: this.POSTGRES_DB,
                username: this.POSTGRES_USER,
                password: this.POSTGRES_PASSWORD,
                host: this.POSTGRES_HOST,
                port: Number(this.POSTGRES_PORT),
                dialect: 'postgres',
            }
        );

        return connection;
    }

    private async connectToPostgreSQL(){
        await this.sequelize.authenticate().then(() => {
            console.log("POSTGRES CONNECTION SUCCESS");
        }).catch((err) => {
            console.log("POSTGRES CONNECTION FAILURE" + err);
        });
    }
}

export default Database;