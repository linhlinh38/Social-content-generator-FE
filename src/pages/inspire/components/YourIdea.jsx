function YourIdea() {
  return (
    <div>
      <form>
        <div className="mb-2">
          <label htmlFor="idea" className="text-16 font-bold mb-4">
            Your Idea
          </label>
          <br />
          <input
            type="text"
            id="idea"
            className="border p-2 mt-3 rounded-lg"
            placeholder="Skipli is launching SkipliAI"
          />
        </div>
        <button type="submit" className="bg-teal-200 p-4 my-4 rounded ">
          Create caption
        </button>
      </form>
    </div>
  );
}

export default YourIdea;
