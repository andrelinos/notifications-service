import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: process.env.UPSTASH_KAFKA_CLIENT_ID,
        brokers: [`${process.env.UPSTASH_KAFKA_BLOCKERS}`],
        sasl: {
          mechanism: 'scram-sha-256',
          username: `${process.env.UPSTASH_KAFKA_USERNAME}`,
          password: `${process.env.UPSTASH_KAFKA_PASSWORD}`,
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
