import * as dotenv from 'dotenv';
import { Kafka, Partitioners } from 'kafkajs';
import { randomUUID } from 'node:crypto';

dotenv.config();

async function bootstrap() {
  const kafka = new Kafka({
    clientId: `${process.env.UPSTASH_KAFKA_CLIENT_I}`,
    brokers: [`${process.env.UPSTASH_KAFKA_BLOCKERS}`],
    sasl: {
      mechanism: 'scram-sha-256',
      username: `${process.env.UPSTASH_KAFKA_USERNAME}`,
      password: `${process.env.UPSTASH_KAFKA_PASSWORD}`,
    },
    ssl: true,
  });

  const producer = kafka.producer({
    createPartitioner: Partitioners.LegacyPartitioner,
  });

  await producer.connect();
  await producer.send({
    topic: `${process.env.UPSTASH_KAFKA_TOPIC}`,
    messages: [
      {
        value: JSON.stringify({
          content: 'You have a new social notification!',
          category: 'social',
          recipientId: randomUUID(),
        }),
      },
    ],
  });

  await producer.disconnect();
}

bootstrap().catch((err) => {
  console.error(err);
});
