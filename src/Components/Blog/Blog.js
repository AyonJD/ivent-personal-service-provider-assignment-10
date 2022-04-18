import React from 'react';

const Blog = () => {
    return (
        <div className="mt-[76px] container mx-auto">
            <div className="questionOne my-10">
                <h1 className='text-xl pt-7 pb-5'>1) What is the difference Authorization and Authentication?</h1>


                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Authorization
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Authentication
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <td class="px-6 py-4">
                                    Authentication verifies who the user is.
                                </td>
                                <td class="px-6 py-4">
                                    Authorization determines what resources a user can access.

                                </td>

                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <td class="px-6 py-4">
                                    Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.
                                </td>
                                <td class="px-6 py-4">
                                    Authorization works through settings that are implemented and maintained by the organization.

                                </td>

                            </tr>
                            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <td class="px-6 py-4">
                                    Authentication is the first step of a good identity and access management process.
                                </td>
                                <td class="px-6 py-4">
                                    Authorization always takes place after authentication.

                                </td>

                            </tr>
                            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <td class="px-6 py-4">
                                    Authentication is visible to and partially changeable by the user.
                                </td>
                                <td class="px-6 py-4">
                                    Authorization isn’t visible to or changeable by the user.
                                </td>

                            </tr>
                            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <td class="px-6 py-4">
                                    Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.
                                </td>
                                <td class="px-6 py-4">
                                    Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="questionTwo">
                <h1 className='text-xl pt-7 pb-5'>2) Why are you using Firebase? What other options do you have to impliment authentication?</h1>
                <p className='text-gray-600 mb-4'>Firebase helps you build and run successful apps. Backed by Google, loved by developers. Accelerate app development with fully managed backend infrastructure. Learn more today. Boost App Engagement. Monitor App Performance. Customize Your App. Backed by Google</p>
                <h1>We can use these following technologies to use other than Firebase.</h1>
                <ul className='list-disc ml-5'>
                    <li>Back4App</li>
                    <li>AWS Amplify</li>
                    <li>Kuzzle</li>
                    <li>Couchbase</li>
                    <li>NativeScript</li>
                    <li>RxDB</li>
                    <li>Flutter</li>
                </ul>
            </div>
            <div className="questionThree my-10">
                <h1 className='text-xl pt-7 pb-5'> 3) What other services does firebase provide other than authentication?</h1>
                <ul className='list-disc ml-5'>
                    <li>Realtime Database.</li>
                    <li>Remote Config.</li>
                    <li>Firebase ML.</li>
                    <li>Cloud Functions.</li>
                    <li>Cloud Messaging.</li>
                    <li>Hosting.</li>
                    <li>Cloud Storage.</li>
                </ul>
            </div>
        </div>
    );
};

export default Blog;