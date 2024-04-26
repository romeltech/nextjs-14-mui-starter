"use server";

import { revalidatePath } from "next/cache";
import { User } from "../db/UserModel";
import { Order } from "../db/OrderModel";
import { connectToDB } from "../lib/utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

// export const addUser = async (formData) => {
//   const { fullname, username, email, password, role, status } =
//     Object.fromEntries(formData);

//   try {
//     connectToDB();

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new User({
//       fullname,
//       username,
//       email,
//       password: hashedPassword,
//       role,
//       status,
//     });

//     await newUser.save();
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to create user!");
//   }

//   revalidatePath("/users");
//   redirect("/users");
// };

// export const updateUser = async (formData) => {
//   const { id, fullname, username, email, password, role, status } =
//     Object.fromEntries(formData);
//   try {
//     connectToDB();

//     const updateFields = {
//       fullname,
//       username,
//       email,
//       role,
//       password,
//       status
//     };

//     Object.keys(updateFields).forEach(
//       (key) =>
//         (updateFields[key] === "" || undefined) && delete updateFields[key]
//     );

//     await User.findByIdAndUpdate(id, updateFields);
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to update user!" + err);
//   }

//   revalidatePath("/users");
//   redirect("/users");
// };

export const fetchOrders = async (filter, q, page) => {
  const orderNumber = q;
  const ITEM_PER_PAGE = 10;
  const orderFilter = filter;
  console.log("orderFilter", orderFilter);
  try {
    connectToDB();
    const count = await Order.find({
      order_id: orderNumber,
    }).count();
    const orders = await Order.find({ order_id: orderNumber })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, orders };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch orders!");
  }
};
