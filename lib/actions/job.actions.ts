// 'use server'
import axios from "axios";

export async function getAllJobs() {
  // params: GetAllJobs into ()
  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      // ...query
      query: "Next.js Developer in Poland, Poland",
      page: "1",
      num_pages: "1",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data.data);
    return response.data.data;

    // Fetch data
    // const { searchQuery, filter, page = 1, pageSize = 10 } = params;
    // Calculate the number of posts to skip based on the page number and page size
    // const skipAmount = (page - 1) * pageSize;
    // const query: FilterQuery<typeof Question> = {};
    // if (searchQuery) {
    //   query.$or = [
    //     { title: { $regex: new RegExp(searchQuery, "i") } },
    //     { content: { $regex: new RegExp(searchQuery, "i") } },
    //   ];
    // }
    // let sortOptions = {};
    // switch (filter) {
    //   case "newest":
    //     sortOptions = { createdAt: -1 };
    //     break;
    //   case "frequent":
    //     sortOptions = { views: -1 };
    //     break;
    //   case "unanswered":
    //     query.answers = { $size: 0 };
    //     break;
    //   default:
    //     break;
    // }
    // const questions = await Question.find(query)
    //   .populate({ path: "tags", model: Tag })
    //   .populate({ path: "author", model: User })
    //   .skip(skipAmount)
    //   .limit(pageSize)
    //   .sort(sortOptions);
    // const totalQuestions = await Question.countDocuments(query);
    // const isNext = totalQuestions > skipAmount + questions.length;
    // return { questions, isNext };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
