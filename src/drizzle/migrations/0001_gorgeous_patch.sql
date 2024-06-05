ALTER TABLE "address" ALTER COLUMN "created_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "updated_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "comment" ALTER COLUMN "created_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "comment" ALTER COLUMN "updated_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "driver" ALTER COLUMN "created_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "driver" ALTER COLUMN "updated_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "created_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "updated_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "estimated_delivery_time" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "actual_delivery_time" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "created_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "updated_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "created_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "updated_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "updated_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "order_status" ADD COLUMN "created_at" timestamp;--> statement-breakpoint
ALTER TABLE "address" DROP COLUMN IF EXISTS "city";--> statement-breakpoint
ALTER TABLE "address" DROP COLUMN IF EXISTS "users";--> statement-breakpoint
ALTER TABLE "address" DROP COLUMN IF EXISTS "orders";--> statement-breakpoint
ALTER TABLE "category" DROP COLUMN IF EXISTS "menu_item";--> statement-breakpoint
ALTER TABLE "city" DROP COLUMN IF EXISTS "state";--> statement-breakpoint
ALTER TABLE "city" DROP COLUMN IF EXISTS "restaurant";--> statement-breakpoint
ALTER TABLE "driver" DROP COLUMN IF EXISTS "users";--> statement-breakpoint
ALTER TABLE "driver" DROP COLUMN IF EXISTS "orders";--> statement-breakpoint
ALTER TABLE "menu_item" DROP COLUMN IF EXISTS "category";--> statement-breakpoint
ALTER TABLE "menu_item" DROP COLUMN IF EXISTS "restaurant";--> statement-breakpoint
ALTER TABLE "menu_item" DROP COLUMN IF EXISTS "order_menu_item";--> statement-breakpoint
ALTER TABLE "order_menu_item" DROP COLUMN IF EXISTS "comment";--> statement-breakpoint
ALTER TABLE "order_menu_item" DROP COLUMN IF EXISTS " menu_item";--> statement-breakpoint
ALTER TABLE "order_menu_item" DROP COLUMN IF EXISTS "orders";--> statement-breakpoint
ALTER TABLE "order_status" DROP COLUMN IF EXISTS "users";--> statement-breakpoint
ALTER TABLE "order_status" DROP COLUMN IF EXISTS "restaurant";--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN IF EXISTS "comments";--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN IF EXISTS "order_menu_item";--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN IF EXISTS "order_status";--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN IF EXISTS "address";--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN IF EXISTS "driver";--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN IF EXISTS "restaurant";--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN IF EXISTS "users";--> statement-breakpoint
ALTER TABLE "restaurant" DROP COLUMN IF EXISTS "menu_item";--> statement-breakpoint
ALTER TABLE "restaurant" DROP COLUMN IF EXISTS "orders";--> statement-breakpoint
ALTER TABLE "restaurant" DROP COLUMN IF EXISTS "city";--> statement-breakpoint
ALTER TABLE "restaurant" DROP COLUMN IF EXISTS "restaurant_owner";--> statement-breakpoint
ALTER TABLE "restaurant_owner" DROP COLUMN IF EXISTS "users";--> statement-breakpoint
ALTER TABLE "restaurant_owner" DROP COLUMN IF EXISTS "restaurant";--> statement-breakpoint
ALTER TABLE "state" DROP COLUMN IF EXISTS "city";--> statement-breakpoint
ALTER TABLE "status_catalog" DROP COLUMN IF EXISTS "order_status";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "address";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "comment";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "driver";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "orders";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "restaurant_owner";