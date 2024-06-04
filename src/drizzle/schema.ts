
import{ pgTable,serial,text,integer,date,decimal,boolean,primaryKey} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";

//state table
export const tableState = pgTable("state",{
id: serial("id").primaryKey(),
name: text("name"),
code: text("code"),
city:text("city")
});

//city table
export const tableCity = pgTable("city",{
    id: serial("id").primaryKey(),
    name: text("name"),
    address: text("address"),
    state:text("state"),
    restaurant:text("restaurant"),
    state_id:integer("state_id").notNull().references(() =>tableState.id,{onDelete:"cascade"})
    });

    //restaurant table
    export const tableRestaurant = pgTable("restaurant",{
        id: serial("id").primaryKey(),
        name: text("name"),
       street_address: text("street_address"),
        zip_code:text("zip_code"),
        created_at:date("created_at"),
        updated_at:date( "updated_at"),
        menu_item:text("menu_item"),
        orders:text ("orders"),
        city:text("city"),
        restaurant_owner:text ("restaurant_owner"),
        city_id:integer("city_id").notNull().references(() =>tableCity.id,{onDelete:"cascade"})
        });

        //category table
        export const tableCategory = pgTable("category",{
            id: serial("id").primaryKey(),
            name: text("name"),
            menu_item: text("menu_item")
            });

        //menu_item table
        export const tableMenuItem = pgTable("menu_item",{
            id: serial("id").primaryKey(),
            name: text("name"),
            description:text("description"),
            ingredients:text("ingredients"),
            price:decimal("price"),
            active:boolean("active"),
            created_at:date("created_at"),
            updated_at:date( "updated_at"),
            category:text("category"),
            restaurant:text("restaurant"),
            order_menu_item:text("order_menu_item"),
            restaurant_id:integer("restaurant_id").notNull().references(() =>tableRestaurant.id,{onDelete:"cascade"}),
            category_id: integer("category_id").notNull().references(() =>tableCategory.id,{onDelete:"cascade"})
            });

            //status_catalog table
            export const tableStatusCatalog = pgTable("status_catalog",{
                id: serial("id").primaryKey(),
                name: text("name"),
                order_status: text("order_status")
                });

             //users table
             export const tableUsers = pgTable("users",{
                id: serial("id").primaryKey(),
                name: text("name"),
                contact_phone:text("contact_phone"),
                phone_verified:boolean("phone_verified"),
                email:text("email"),
                email_verified:boolean("email_verified"),
                confirmation_code:text(" confirmation_code"),
                password:text("password"),
                created_at:date("created_at"),
                updated_at:date( "updated_at"),
                address:text("address"),
                comment:text("comment"),
                driver:text("driver"),
                orders:text ("orders"),
                restaurant_owner: text("restaurant_owner")
                });

                //driver table
                export const tableDriver= pgTable("driver",{
                    id: serial("id").primaryKey(),
                    car_make: text("car_make"),
                    car_model:text("car_model"),
                    car_year:integer("car_year"),
                    online:boolean("online"),
                    delivering:boolean("delivering"),
                    created_at:date( "created_at"),
                    updated_at:date( "updated_at"),
                    users:text("users"),
                    orders:text("orders"),
                    user_id:integer("user_id").notNull().references(() =>tableUsers.id,{onDelete:"cascade"})
                    });

              //restaurant_owner table
              export const tableRestaurantOwner = pgTable("restaurant_owner",{
                id: serial("id").primaryKey(),
                users:text("users"),
                restaurant:text("restaurant"),
                owner_id:integer("owner_id").notNull().references(() =>tableUsers.id,{onDelete:"cascade"}),
                restaurant_id: integer("restaurant_id").notNull().references(() =>tableRestaurant.id,{onDelete:"cascade"})
                });

            //address table
            export const tableAddress = pgTable("address",{
                id: serial("id").primaryKey(),
                street_address_1: text("street_address_1"),
                street_address_2: text("street_address_2"),
                description:text("description"),
                zip_code:text("zip_code"),
                delivery_instructions:text("delivery_instructions"),
                created_at:date("created_at"),
                updated_at:date( "updated_at"),
                city:text("city"),
                users:text("users"),
                orders:text("orders"),
                user_id:integer("user_id").notNull().references(() =>tableUsers.id,{onDelete:"cascade"}),
                city_id:integer("city_id").notNull().references(() =>tableCity.id,{onDelete:"cascade"})
                });

                //orders table
                export const tableOrders = pgTable("orders",{
                    id: serial("id").primaryKey(),
                    estimated_delivery_time: date("estimated_delivery_time"),
                    actual_delivery_time: date("actual_delivery_time"),
                    price: decimal("price"),
                    discount:decimal("discount"),
                    final_price:decimal("final_price"),
                    comment:text("comment"),
                    created_at:date("created_at"),
                    updated_at:date( "updated_at"),
                    comments:text("comments"),
                    order_menu_item:text("order_menu_item"),
                    order_status:text("order_status"),
                    address:text("address"),
                    driver:text("driver"),
                    restaurant:text("restaurant"),
                    users:text("users"),
                    restaurant_id:integer("restaurant_id").notNull().references(() =>tableRestaurant.id,{onDelete:"cascade"}),
                    delivery_address_id:integer("delivery_address_id").notNull().references(() =>tableAddress.id,{onDelete:"cascade"}),
                    user_id:integer("user_id").notNull().references(() =>tableUsers.id,{onDelete:"cascade"}),
                    driver_id:integer("driver_id").notNull().references(() =>tableDriver.id,{onDelete:"cascade"})
                    });

                    //order_status table
                    export const tableOrderStatus= pgTable("order_status",{
                        id: serial("id").primaryKey(),
                        users:text("users"),
                        restaurant:text("restaurant"),
                        order_id:integer("order_id").notNull().references(() =>tableOrders.id,{onDelete:"cascade"}),
                        status_catalog_id: integer("status_catalog_id").notNull().references(() =>tableStatusCatalog.id,{onDelete:"cascade"})
                        });

                    // comment table
                    export const tableComment = pgTable("comment",{
                        id: serial("id").primaryKey(),
                        comment_text:text("comment_text"),
                        is_complaint:boolean("is_complaint"),
                        is_praise:boolean("is_praise"),
                        created_at:date("created_at"),
                        updated_at:date( "updated_at"),
                        order_id:integer("order_id").notNull().references(() =>tableOrders.id,{onDelete:"cascade"}),
                        user_id: integer("user_id").notNull().references(() =>tableUsers.id,{onDelete:"cascade"})
                        });
                    //order menu item
                    export const tableOrderMenuItem = pgTable("order_menu_item",{
                        id: serial("id").primaryKey(),
                        quantity:integer("quantity"),
                        item_price:decimal("item_price"),
                        price:decimal("price"),
                        comment:text("comment"),
                        menu_item:text(" menu_item"),
                        orders:text("orders"),
                        order_id:integer("order_id").notNull().references(() =>tableOrders.id,{onDelete:"cascade"}),
                        menu_item_id: integer("menu_item_id").notNull().references(() =>tableMenuItem.id,{onDelete:"cascade"})
                        });

//relationship state- city (1-*)
// export const state_city = relations(tableState,({one,many}) =>({
// city:one(tableCity,{
//     fields:[tableState.id],
//     references:[tableCity.state_id]
// }),

// }));

//relationship  city - restaurant (1-*)

//relationship city -address  (1-*)

//relationship  restaurant - menu_item (1-*)

//relationship  restaurant - orders(1-*)

//relationship  restaurant - restaurant_owner(1-*)

//relationship  menu_item - order_menu_item(1-*)

//relationship category- menu_item (1-*)

//relationship address -orders (1-*)

//relationship users-address  (1-*)

//relationship users-restaurant_owner (1-*)

//relationship users-driver  (1-*)

//relationship users-orders (1-*)

//relationship users-comments  (1-*)

//relationship driver -orders (1-*)

//relationship orders- comments (1-*)

//relationship orders- order_status (1-*)

//relationship orders- order_menu_item (1-*)

//relationship  status_catalog -order_status(1-*)

