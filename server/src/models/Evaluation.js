import mongoose from 'mongoose';

// TODO: define the Evaluation schema per README.md section 1.

const evaluationSchema = new mongoose.Schema(
  {
    // TODO
  },
  { timestamps: true }
);

// TODO: add the compound uniqueness constraint described in README.md section 1.

export const Evaluation = mongoose.model('Evaluation', evaluationSchema);
