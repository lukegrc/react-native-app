<template>
  <StackLayout>
    <Label text="My Bookings" class="page-title" />

    <ScrollView v-if="orders.length > 0">
      <StackLayout>
        <GridLayout
          v-for="order in sortedOrders"
          :key="order.id"
          columns="*, auto"
          rows="auto, auto, auto"
          class="booking-card"
        >
          <!-- Order Header -->
          <StackLayout col="0" row="0" class="order-header">
            <Label :text="`Order #${order.id}`" class="order-id" />
            <Label :text="formatDate(order.orderDate)" class="order-date" />
          </StackLayout>

          <!-- Order Status -->
          <Label
            :text="order.status.toUpperCase()"
            col="1"
            row="0"
            :class="getStatusClass(order.status)"
          />

          <!-- Order Items -->
          <StackLayout col="0" row="1" class="order-items">
            <Label
              v-for="item in order.items"
              :key="`${order.id}-${item.id}`"
              :text="`${item.subject} x${item.quantity}`"
              class="order-item"
            />
          </StackLayout>

          <!-- Order Total -->
          <StackLayout col="0" row="2" class="order-total">
            <Label text="Total:" class="total-label" />
            <Label :text="`€${order.totalAmount}`" class="total-amount" />
          </StackLayout>

          <!-- Contact Info -->
          <StackLayout col="1" row="1" rowSpan="2" class="contact-info">
            <Label :text="order.userInfo.name" class="contact-name" />
            <Label :text="order.userInfo.phoneNumber" class="contact-phone" />
          </StackLayout>
        </GridLayout>
      </StackLayout>
    </ScrollView>

    <!-- Empty Orders Message -->
    <StackLayout v-else class="empty-orders">
      <Label text="📚" class="empty-icon" />
      <Label text="No bookings yet" class="empty-text" />
      <Label text="Book some classes to see them here!" class="empty-subtext" />
    </StackLayout>
  </StackLayout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Order } from "../types";

@Component
export default class BookingsList extends Vue {
  @Prop({ required: true }) readonly orders!: Order[];

  get sortedOrders(): Order[] {
    return [...this.orders].sort(
      (a, b) =>
        new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
    );
  }

  private formatDate(date: Date): string {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  private getStatusClass(status: string): string {
    switch (status) {
      case "confirmed":
        return "status-confirmed";
      case "cancelled":
        return "status-cancelled";
      default:
        return "status-pending";
    }
  }
}
</script>

<style scoped>
.page-title {
  font-size: 24;
  font-weight: bold;
  text-align: center;
  margin: 16 0 8 0;
  color: #2e7d32;
}

.booking-card {
  background-color: white;
  margin: 8 16;
  padding: 16;
  border-radius: 8;
  elevation: 2;
}

.order-header {
  margin-bottom: 8;
}

.order-id {
  font-size: 16;
  font-weight: bold;
  color: #333;
}

.order-date {
  font-size: 12;
  color: #666;
  margin-top: 2;
}

.status-confirmed {
  font-size: 12;
  font-weight: bold;
  color: #4caf50;
  text-align: right;
}

.status-pending {
  font-size: 12;
  font-weight: bold;
  color: #ff9800;
  text-align: right;
}

.status-cancelled {
  font-size: 12;
  font-weight: bold;
  color: #f44336;
  text-align: right;
}

.order-items {
  margin: 8 0;
}

.order-item {
  font-size: 14;
  color: #555;
  margin: 2 0;
}

.order-total {
  margin-top: 8;
}

.total-label {
  font-size: 14;
  color: #666;
}

.total-amount {
  font-size: 16;
  font-weight: bold;
  color: #2e7d32;
  margin-top: 2;
}

.contact-info {
  align-items: flex-end;
  margin-left: 16;
}

.contact-name {
  font-size: 12;
  font-weight: bold;
  color: #333;
  text-align: right;
}

.contact-phone {
  font-size: 11;
  color: #666;
  text-align: right;
  margin-top: 2;
}

.empty-orders {
  align-items: center;
  margin: 40 16;
}

.empty-icon {
  font-size: 48;
  margin-bottom: 16;
}

.empty-text {
  font-size: 18;
  font-weight: bold;
  color: #666;
  margin-bottom: 8;
}

.empty-subtext {
  font-size: 14;
  color: #999;
  text-align: center;
}
</style>
