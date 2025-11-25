-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "dateUpdated" DROP NOT NULL;

-- AlterTable
ALTER TABLE "CustomerContact" ALTER COLUMN "dateUpdated" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductColor" ALTER COLUMN "dateUpdated" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductInventory" ALTER COLUMN "dateUpdated" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductSale" ALTER COLUMN "dateUpdated" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "dateUpdated" TIMESTAMP(3);
