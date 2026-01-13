import Airtable from "airtable";
import dotenv from "dotenv";

dotenv.config();

const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = airtable.base(process.env.AIRTABLE_BASE_ID);

export default base;

