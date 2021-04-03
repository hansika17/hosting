const Home = () => {
  return (
    <div class="max-w-lg mx-auto py-6 sm:px-6 lg:px-8 "> 
      <form action="#" method="POST">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="bg-white py-2 px-4  sm:px-6">
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
            <p class="mt-1 text-sm text-gray-500">Use a permanent address where you can recieve mail.</p>
          </div>

          <div class="grid grid-rows-5 py-2 ">
            <div class=" grid grid-cols-2 ">
              <div class="col-span-1 sm:col-span-1 px-2">
                <input type="text" name="first_name" placeholder="Postcode" id="first_name" autocomplete="given-name" class="mt-1 h=1/2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
              <div class="col-span-1 sm:col-span-1 px-2">
                <input type="text" name="last_name" placeholder="National" id="last_name" autocomplete="family-name" class="mt-1 h=1/2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div class="col-span-1 sm:col-span-1 px-2">
                <select id="make" name="make" autocomplete="make" class="mt-1 block w-full bg-white border border-gray-300 h=1/2 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Make (any)</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
              <div class="col-span-1 sm:col-span-1 px-2">
                <select id="make" name="make" autocomplete="make" class="mt-1 block w-full bg-white border border-gray-300 h=1/2 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Model (any)</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            <div class="switch-field grid grid-cols-2">
              <div class="col-span-1 sm:col-span-1 ">
                <input type="radio" id="radio-one" name="switch-one" value="yes"  checked="checked" class=" block w-full h=1/2 check mx-auto" />
                  <label for="radio-one" class=" font-medium block w-full rounded-md shadow-sm mx-auto sm:text-sm" >Cash
                  </label>
                </div>
                <div class="col-span-1 sm:col-span-1 ">
                  <input type="radio" id="radio-two" name="switch-one" value="no" class=" mx-auto block w-full ml-2 h=1/2"  />
                  <label for="radio-two" class=" font-medium block w-full rounded-md shadow-sm  mx-auto sm:text-sm">Finance
                  </label>
                </div>
            </div>
            <div class="grid grid-cols-2">
              <div class=" col-span-1 sm:col-span-1 px-2">
                <select id="make" name="make" autocomplete="make" class="mt-1 block w-full h=1/2 bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Min price (any)</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
              <div class=" col-span-1 sm:col-span-1 px-2">
                <select id="make" name="make" autocomplete="make" class="mt-1 block w-full h=1/2 bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Max price (any)</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
          </div>
          <div class=" ">
            <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
            <div class=" grid grid-cols-2 pt-2 ">
              <div class="col-span-1 sm:col-span-1 ">
                  <button type="submit" class=" inline-flex  text-sm font-normal text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <svg class="w-6 h-6 px-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                      </svg>
                  Reset
                </button>
                </div>
                <div class="col-span-1 sm:col-span-1 text-right ">
                    <button type="submit" class="  inline-flex  text-sm font-normal text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      More options
                    </button>
                </div>
            </div>
          </div>
       </div>
    </div>
      </div>
    </form>
    </div>
   );
}
 
export default Home;