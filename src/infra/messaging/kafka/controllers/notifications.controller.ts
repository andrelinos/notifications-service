import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { SendNotification } from '~/application/use-cases/send-notification';

interface SendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @EventPattern(`${process.env.UPSTASH_KAFKA_TOPIC}`)
  async handleSendNotification(
    @Payload() { content, category, recipientId }: SendNotificationPayload,
  ) {
    await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });
  }
}
