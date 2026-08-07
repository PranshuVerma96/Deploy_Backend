import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    place: String,
    required: true,
  },
  { timestamps: true },
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema,
);
