-- CreateTable
CREATE TABLE "RecycleEntry" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "wasteType" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "points" INTEGER NOT NULL DEFAULT 0,
    "qrCode" TEXT NOT NULL,
    "qrPayload" TEXT NOT NULL,
    "verifiedAt" TIMESTAMP(3),
    "verifiedByBusinessId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecycleEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RecycleEntry_userId_idx" ON "RecycleEntry"("userId");

-- CreateIndex
CREATE INDEX "RecycleEntry_status_idx" ON "RecycleEntry"("status");
