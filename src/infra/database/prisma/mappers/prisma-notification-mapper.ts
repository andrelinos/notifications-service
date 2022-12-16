import { Notification as RawNotification } from '@prisma/client';

import { Content } from '~/application/entities/content';
import { Notification } from '~/application/entities/notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      canceledAt: notification.canceledAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(prismaNotificationData: RawNotification): Notification {
    return new Notification(
      {
        category: prismaNotificationData.category,
        content: new Content(prismaNotificationData.content),
        recipientId: prismaNotificationData.recipientId,
        readAt: prismaNotificationData.readAt,
        canceledAt: prismaNotificationData.canceledAt,
        createdAt: prismaNotificationData.createdAt,
      },
      prismaNotificationData.id,
    );
  }
}
