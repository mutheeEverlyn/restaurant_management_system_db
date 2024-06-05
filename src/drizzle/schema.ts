
import{ pgTable,serial,text,integer,timestamp,decimal,boolean,primaryKey} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
//state table
export const tableState = pgTable("state",{
id: serial("id").primaryKey(),
name: text("name"),
code: text("code")
});

//city table
export const tableCity = pgTable("city",{
    id: serial("id").primaryKey(),
    name: text("name"),
    address: text("address"),
    state_id:integer("state_id").notNull().references(() =>tableState.id,{onDelete:"cascade"})
    });

    //restaurant table
    export const tableRestaurant = pgTable("restaurant",{
        id: serial("id").primaryKey(),
        name: text("name"),
       street_address: text("street_address"),
        zip_code:text("zip_code"),
        created_at:timestamp("created_at"),
        updated_at:timestamp( "updated_at"),
        city_id:integer("city_id").notNull().references(() =>tableCity.id,{onDelete:"cascade"})
        });

        //category table
        export const tableCategory = pgTable("category",{
            id: serial("id").primaryKey(),
            name: text("name")
            });

        //menu_item table
        export const tableMenuItem = pgTable("menu_item",{
            id: serial("id").primaryKey(),
            name: text("name"),
            description:text("description"),
            ingredients:text("ingredients"),
            price:decimal("price"),
            active:boolean("active"),
            created_at:timestamp("created_at"),
            updated_at:timestamp( "updated_at"),
            restaurant_id:integer("restaurant_id").notNull().references(() =>tableRestaurant.id,{onDelete:"cascade"}),
            category_id: integer("category_id").notNull().references(() =>tableCategory.id,{onDelete:"cascade"})
            });

            //status_catalog table
            export const tableStatusCatalog = pgTable("status_catalog",{
                id: serial("id").primaryKey(),
                name: text("name")
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
                created_at:timestamp("created_at"),
                updated_at:timestamp( "updated_at")
                });

                //driver table
                export const tableDriver= pgTable("driver",{
                    id: serial("id").primaryKey(),
                    car_make: text("car_make"),
                    car_model:text("car_model"),
                    car_year:integer("car_year"),
                    online:boolean("online"),
                    delivering:boolean("delivering"),
                    created_at:timestamp( "created_at"),
                    updated_at:timestamp( "updated_at"),
                    user_id:integer("user_id").notNull().references(() =>tableUsers.id,{onDelete:"cascade"})
                    });

              //restaurant_owner table
              export const tableRestaurantOwner = pgTable("restaurant_owner",{
                id: serial("id").primaryKey(),
                owner_id:integer("owner_id").notNull().references(() =>tableUsers.id,{onDelete:"cascade"}),
                restaurant_id: integer("restaurant_id").notNull().references(() =>tableRestaurant.id,{onDelete:"cascade"})
                });

            //address table
            export const tableAddress = pgTable("address",{
                id: serial("id").primaryKey(),
                street_address_1: text("street_address_1"),
                street_address_2: text("street_address_2"),
                zip_code:text("zip_code"),
                delivery_instructions:text("delivery_instructions"),
                created_at:timestamp("created_at"),
                updated_at:timestamp( "updated_at"),
                user_id:integer("user_id").notNull().references(() =>tableUsers.id,{onDelete:"cascade"}),
                city_id:integer("city_id").notNull().references(() =>tableCity.id,{onDelete:"cascade"})
                });

                //orders table
                export const tableOrders = pgTable("orders",{
                    id: serial("id").primaryKey(),
                    estimated_delivery_time: timestamp("estimated_delivery_time"),
                    actual_delivery_time: timestamp("actual_delivery_time"),
                    price: decimal("price"),
                    discount:decimal("discount"),
                    final_price:decimal("final_price"),
                    comment:text("comment"),
                    created_at:timestamp("created_at"),
                    updated_at:timestamp( "updated_at"),
                    restaurant_id:integer("restaurant_id").notNull().references(() =>tableRestaurant.id,{onDelete:"cascade"}),
                    delivery_address_id:integer("delivery_address_id").notNull().references(() =>tableAddress.id,{onDelete:"cascade"}),
                    user_id:integer("user_id").notNull().references(() =>tableUsers.id,{onDelete:"cascade"}),
                    driver_id:integer("driver_id").notNull().references(() =>tableDriver.id,{onDelete:"cascade"})
                    });

                    //order_status table
                    export const tableOrderStatus= pgTable("order_status",{
                        id: serial("id").primaryKey(),
                        created_at:timestamp("created_at"),
                        order_id:integer("order_id").notNull().references(() =>tableOrders.id,{onDelete:"cascade"}),
                        status_catalog_id: integer("status_catalog_id").notNull().references(() =>tableStatusCatalog.id,{onDelete:"cascade"})
                        });

                    // comment table
                    export const tableComment = pgTable("comment",{
                        id: serial("id").primaryKey(),
                        comment_text:text("comment_text"),
                        is_complaint:boolean("is_complaint"),
                        is_praise:boolean("is_praise"),
                        created_at:timestamp("created_at"),
                        updated_at:timestamp( "updated_at"),
                        order_id:integer("order_id").notNull().references(() =>tableOrders.id,{onDelete:"cascade"}),
                        user_id: integer("user_id").notNull().references(() =>tableUsers.id,{onDelete:"cascade"})
                        });
                    //order menu item
                    export const tableOrderMenuItem = pgTable("order_menu_item",{
                        id: serial("id").primaryKey(),
                        quantity:integer("quantity"),
                        item_price:decimal("item_price"),
                        price:decimal("price"),
                        order_id:integer("order_id").notNull().references(() =>tableOrders.id,{onDelete:"cascade"}),
                        menu_item_id: integer("menu_item_id").notNull().references(() =>tableMenuItem.id,{onDelete:"cascade"})
                        });

                       

                        // Relationship:  City-state (1-1) city-restaurant(1-*) city-address(1-*)
                        export const state_city = relations(tableCity, ({ one, many }) => ({
                          state: one(tableState, {
                            fields: [tableCity.state_id],
                            references: [tableState.id],
                          }),
                          restaurants: many(tableRestaurant),
                          addresses: many(tableAddress),
                        }));
                        
                         // Relationship:  state - city(1-*)
                        export const state_cities = relations(tableState, ({ many }) => ({
                          cities: many(tableCity),
                        }));
                        
                        // Relationship: Restaurant - city(1-1) restaurant - menu_item (1-*)
                        export const restaurant_city = relations(tableRestaurant, ({ one ,many}) => ({
                          city: one(tableCity, {
                            fields: [tableRestaurant.city_id],
                            references: [tableCity.id],
                          }),
                          menus:many(tableMenuItem)
                        }));
                        
                        // Relationship: Address - address(1-1)
                        export const address_city = relations(tableAddress, ({ one }) => ({
                          city: one(tableCity, {
                            fields: [tableAddress.city_id],
                            references: [tableCity.id],
                          }),
                        }));
                        
                     //relationship   menu_item -restaurant  (1-*)
                     export const menu_item_restaurant= relations(tableMenuItem, ({ many }) => ({
                      restaurants: many(tableMenuItem),
                    }));


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
export type tiState=typeof tableState.$inferInsert;
export type tiCity=typeof tableCity.$inferInsert;
export type tsState=typeof tableState.$inferSelect;
export type tsCity=typeof tableCity.$inferSelect;