export default function AddTaskModal() {
  return (
    <div className="bg-black bg-opacity-70  fixed inset-0 flex items-center justify-center  text-white">
      <form className=" border-[#FEFBFB]/[36%] p-9 bg-[#191D26] rounded-md w-[600px]">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:text-[28px]">
          Add New Task
        </h2>
        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="w-full rounded-md block bg-[#28323F] px-3 py-2.5"
              name="title"
              id="title"
              required
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description </label>
            <textarea
              type="text"
              className="w-full rounded-md block bg-[#28323F] px-3 py-2.5"
              name="description"
              id="description"
              cols={20}
              rows={4}
              required
            />
          </div>
          <div className="flex justify-between">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              className="w-full rounded-md block bg-[#28323F] px-3 py-2.5"
              name="tags"
              id="tags"
              required
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="priority">Priority </label> <br/>
            <select name="priority" id="priority" className="bg-[#28323F] px-3 py-2.5 pr-[12px] rounded-md">
                <option value="" selected>
                    Select Priority
                </option>
                <option value="low">
                  Low
                </option>
                <option value="medium">
                  Medium
                </option>
                <option value="high">
                  High
                </option>
            </select>
          </div>
          </div>

          <div className="flex justify-between">
          <button className="rounded-md px-4 py-3 text-sm font-semibold bg-red-500">Close</button>
          <button className="rounded-md px-4 py-3 text-sm font-semibold bg-blue-500">Submit</button>
          
          </div>
        </div>
      </form>
    </div>
  );
}