import { useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Add a New Book</h2>
      <form className="mt-4 space-y-3">
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Author"
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Description"
          className="w-full border p-2 rounded"
        ></textarea>
        <input
          type="url"
          placeholder="Cover Image URL"
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
      <button
        onClick={() => navigate("/")}
        className="mt-4 text-blue-500 underline"
      >
        Back to Home
      </button>
    </div>
  );
}

export default AddBook;
