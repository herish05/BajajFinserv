import { askAi } from "../services/aiService.js";
import { fibonacci, findHCF, findLCM, findPrimes } from "../utils/math.js";
const EMAIL = process.env.EMAIL || "herish0688.be23@chitkara.edu.in"
export const handlebfhl = async(req,res)=>{
    try {
      const keys = Object.keys(req.body);

      if (keys.length !== 1) {
        return res
          .status(400)
          .json({ is_success: false, error: "Only one key allowed" });
      }

      const key = keys[0];
      const value = req.body[key];

      let result;

      switch (key) {
        case "fibonacci":
          if (!Number.isInteger(value) || value < 0)
            return res
              .status(400)
              .json({ is_success: false, error: "Invalid integer" });
          result = fibonacci(value);
          break;

        case "prime":
          if (!Array.isArray(value))
            return res
              .status(400)
              .json({ is_success: false, error: "Invalid array" });
          result = findPrimes(value);
          break;

        case "lcm":
          result = findLCM(value);
          break;

        case "hcf":
          result = findHCF(value);
          break;

        case "AI":
          if (typeof value !== "string")
            return res
              .status(400)
              .json({ is_success: false, error: "Invalid question" });
          result = await askAi(value);
          break;

        default:
          return res
            .status(400)
            .json({ is_success: false, error: "Invalid key" });
      }

      res.status(200).json({
        is_success: true,
        official_email: EMAIL,
        data: result,
      });
    } catch (err) {
        console.log(err);
      res.status(500).json({ is_success: false, error: "Server Error" });
    }
}

export const handleHealth = async(req,res)=>{
    res.status(200).json({
        is_success:true,
        official_email:process.env.EMAIL
    });
}