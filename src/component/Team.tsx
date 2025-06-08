import React from "react";

export default function Team() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* Title */}
      <div className="mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Наша команда</h2>
        <p className="mt-1 text-gray-600">Опытные специалисты, которым можно доверять</p>
      </div>
      {/* End Title */}

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
        <div className="text-center">
          <img
            className="rounded-full size-24 mx-auto"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800">David Forren</h3>
            <p className="text-sm text-gray-600">Founder / CEO</p>
          </div>
        </div>
        {/* End Col */}

        <div className="text-center">
          <img
            className="rounded-full size-24 mx-auto"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800">Amil Evara</h3>
            <p className="text-sm text-gray-600">UI/UX Designer</p>
          </div>
        </div>
        {/* End Col */}

        <div className="text-center">
          <img
            className="rounded-full size-24 mx-auto"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800">Ebele Egbuna</h3>
            <p className="text-sm text-gray-600">Support Consultant</p>
          </div>
        </div>
        {/* End Col */}

        <div className="text-center">
          <img
            className="rounded-full size-24 mx-auto"
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800">Maria Powers</h3>
            <p className="text-sm text-gray-600">Director of sales</p>
          </div>
        </div>
        {/* End Col */}

        <div className="text-center">
          <img
            className="rounded-full size-24 mx-auto"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800">Delia Pawelke</h3>
            <p className="text-sm text-gray-600">Front-end Developer</p>
          </div>
        </div>
        {/* End Col */}

        <div className="text-center">
          <img
            className="rounded-full size-24 mx-auto"
            src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800">Tom Lowry</h3>
            <p className="text-sm text-gray-600">UI/UX Designer</p>
          </div>
        </div>
        {/* End Col */}

        <div className="text-center">
          <img
            className="rounded-full size-24 mx-auto"
            src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800">Louise Donadieu</h3>
            <p className="text-sm text-gray-600">Support Consultant</p>
          </div>
        </div>
        {/* End Col */}

        <div className="text-center">
          <img
            className="rounded-full size-24 mx-auto"
            src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800">Jeff Fisher</h3>
            <p className="text-sm text-gray-600">Project Manager</p>
          </div>
        </div>
        {/* End Col */}

        <div className="text-center">
          <img
            className="rounded-full size-24 mx-auto"
            src="https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800">Sophia Harrington</h3>
            <p className="text-sm text-gray-600">Project Manager</p>
          </div>
        </div>
        {/* End Col */}

        <div className="text-center">
          <img
            className="rounded-full size-24 mx-auto"
            src="https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800">Christina Kray</h3>
            <p className="text-sm text-gray-600">Support Consultant</p>
          </div>
        </div>
        {/* End Col */}

        <div className="text-center">
          <img
            className="rounded-full size-24 mx-auto"
            src="https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800">Amy Forren</h3>
            <p className="text-sm text-gray-600">Product Designer</p>
          </div>
        </div>
        {/* End Col */}

        <div className="text-center">
          <img
            className="rounded-full size-24 mx-auto"
            src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800">Philip Williams</h3>
            <p className="text-sm text-gray-600">Support Consultant</p>
          </div>
        </div>
        {/* End Col */}

        <div className="text-center">
          <img
            className="rounded-full size-24 mx-auto"
            src="https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800">Brian Lofoten</h3>
            <p className="text-sm text-gray-600">UI/UX Designer</p>
          </div>
        </div>
        {/* End Col */}

        <div className="text-center">
          <img
            className="rounded-full size-24 mx-auto"
            src="https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800">Jessica Dorsey</h3>
            <p className="text-sm text-gray-600">Director of sales</p>
          </div>
        </div>
        {/* End Col */}

        <div className="text-center">
          <img
            className="rounded-full size-24 mx-auto"
            src="https://images.unsplash.com/photo-1521151716396-b2da27b1a19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="font-medium text-gray-800">Nick Jackson</h3>
            <p className="text-sm text-gray-600">UI/UX Designer</p>
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
}
