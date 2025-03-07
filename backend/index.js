const fastify = require("fastify")({ logger: true });

fastify.get("/api", async (request, reply) => {
    return { hello: "world" };
});

const start = async () => {
    try {
        await fastify.listen({ port: 3001, host: "0.0.0.0" });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();