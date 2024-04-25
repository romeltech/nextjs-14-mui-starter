import mongoose from "mongoose";

const schema: mongoose.Schema = new mongoose.Schema(
  {
    order_id: {
      type: Number,
      required: true,
      integer: true,
    },
    order_increment_id: {
      type: String,
      required: true,
    },
    order_status: {
      type: String,
      required: true,
    },
    order_creation_date: {
      type: Date,
      required: true,
    },
    order_delivery_date: {
      type: String,
      required: true,
    },
    order_delivery_time_slot: {
      type: String,
      required: true,
    },
    target_dispatch_time: {
      type: String,
      required: true,
    },
    customer_group: {
      type: String,
      required: true,
    },
    delivery_zone: {
      type: String,
      required: true,
    },
    delivery_area: {
      type: String,
      required: true,
    },
    delivery_emirates: {
      type: String,
      required: true,
    },
    picker_id: {
      type: String,
      required: false,
      integer: true,
    },
    picker_name: {
      type: String,
      required: false,
    },
    delivery_store_id: {
      type: String,
      required: true,
    },
    delivery_store: {
      type: String,
      required: true,
    },
    total_ordered_items: {
      type: Number,
      required: true,
      integer: true,
    },
    picked_items: {
      type: Number,
      required: false,
      integer: true,
    },
    driver_name: {
      type: String,
      required: false,
    },
    items_flags: {
      type: String,
      required: false,
    },
    customer_segments: {
      type: String,
      required: false,
    },
    subsitution_requested: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);
export const Order = mongoose.models.Order || mongoose.model("Order", schema);
