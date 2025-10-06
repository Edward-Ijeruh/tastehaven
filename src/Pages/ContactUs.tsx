const ContactUs = () => {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Our Story */}
          <div className=" mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-stone-900">
              Our Story
            </h2>
            <p className="mt-4 max-w-2xl text-md text-stone-600">
              From a small family kitchen to a beloved haven for food lovers,
              our journey is seasoned with passion and a commitment to
              deliciousness.
            </p>
          </div>

          {/* Mission & Values */}
          <section className="space-y-16">
            <div className="bg-white rounded-xl shadow-md p-8 border border-amber-600/10">
              <h3 className="text-2xl font-extrabold mb-6 border-b-2 border-amber-600/30 pb-3 text-stone-900">
                Our Mission &amp; Values
              </h3>

              <div className="grid md:grid-cols-2 gap-10">
                {/* Mission */}
                <div className="space-y-3">
                  <h4 className="text-2xl font-semibold text-amber-600">
                    Mission
                  </h4>
                  <p className="text-stone-700 text-md leading-relaxed">
                    To provide a delightful dining experience that exceeds
                    expectations, using the freshest, locally-sourced
                    ingredients. We are dedicated to creating exciting flavors
                    and ensuring our food is not only delicious but also
                    responsible.
                  </p>
                </div>

                {/* Core Values */}
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-amber-600">
                    Core Values
                  </h4>
                  <ul className="list-disc list-inside space-y-3 text-md text-stone-700 marker:text-amber-600">
                    <li>
                      <span className="font-semibold text-stone-900">
                        Quality:
                      </span>{" "}
                      The finest ingredients, prepared with care.
                    </li>
                    <li>
                      <span className="font-semibold text-stone-900">
                        Satisfaction:
                      </span>{" "}
                      Prioritizing our customers' happiness.
                    </li>
                    <li>
                      <span className="font-semibold text-stone-900">
                        Innovation:
                      </span>{" "}
                      Constantly exploring new, exciting flavors.
                    </li>
                    <li>
                      <span className="font-semibold text-stone-900">
                        Community:
                      </span>{" "}
                      Actively supporting the communities we serve.
                    </li>
                    <li>
                      <span className="font-semibold text-stone-900">
                        Sustainability:
                      </span>{" "}
                      Minimizing our environmental impact.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Meet the Team */}
            <section>
              <h3 className="text-2xl font-bold mb-8 px-8 text-stone-900">
                Meet the Team
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Chen",
                    role: "CEO & Founder",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7X1zG2aVdc8fITDP_3oBH2W7vQVRtHbOWs_iJNVDGO_PhEpzZslPAOuAlWF00aXIhZ9eXgLsyWoW-1B4ZBeE49ATp3c4qFaUw6qNul20VV_FFcv542MlCnBqM4Wow-FcNkQO_ZqUSXERn3f_G7lwrPF2r3CQ_7Rq82IUTmgaKhenIVGsirt2cJ8KEgdrPMBd6Say4C1E92rWj6yzeTvRxS9RsqcNAmr4tDjW6qQNvRv1FtCuRcDxBq3y2yEYGAHJpNcdT1uX0Z0U",
                  },
                  {
                    name: "David Lee",
                    role: "Head Chef",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7Rt8RvWWjOLApCgYJNVnk3-YgbxB4eL-LESGpd4AJWvQISML3FRIVW_6BiDMAttffzuQuYzEtiXIpOU6K0lx6kPOi947j4PnC7RF6UcKB4fqiaFwPbIUL1AqPkw2eAwL27Iqy7d7jeML6DEQ8reXPGKMINmfw7WSpJ-A6tZHHnBKSfdRNy68yRZrd2TjGZEP4waRX4hungj3mLUn1pCbIWtx2RMhsBfPtEz7aOr_QXRl_PLwUhuhSOE7eDgMVybEbGzHuu_FH3vQ",
                  },
                  {
                    name: "Emily Rodriguez",
                    role: "Marketing Director",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkP0ED9yvJ7_3s-rjN_oRoetedO0vWjChTVY5S44PUNRA6oovxlXDryJVPDhPBwUcoPWbtXLMZCsbhK7ZXS4S91xZEEuXv0WRBvqtbxj5mgPWdvvxhencBEnT-7ZuU0H5jivSKLN_em2Pz4AOH-SkQlPPWbFBVFnxqwSuvk7yOx5hELEsEh40Qbrn38QVtoAJ9FvS4j5srNtzf1jms289WULK8n9zZOOIP3Iey_Qozd9OsO5FM_rarAir-FeNVJ7MecKx7FZQArEc",
                  },
                ].map((member) => (
                  <div key={member.name} className="text-center">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-amber-600/20"
                    />
                    <h4 className="text-lg font-bold text-stone-900">
                      {member.name}
                    </h4>
                    <p className="text-amber-600 font-medium">{member.role}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Milestones */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-amber-600/10">
              <section>
                <h3 className="text-2xl font-bold mb-6 text-stone-900 border-b-2 border-amber-600/30  pb-3">
                  Our Milestones
                </h3>
                <div className="relative text-md border-l-2 border-stone-200 pl-8">
                  {[
                    {
                      year: "2024",
                      title: "TasteHaven Opens Its Doors",
                      desc: "The first TasteHaven restaurant opens in downtown Springfield.",
                    },
                    {
                      year: "2025",
                      title: "Launch of Online Ordering",
                      desc: "TasteHaven launches its online ordering platform, making it easier than ever to enjoy our food.",
                    },
                  ].map((milestone, index) => (
                    <div key={index} className="relative mb-8">
                      <div className="absolute top-1 -left-11 w-5 h-5 bg-amber-600 rounded-full ring-4 ring-white"></div>
                      <h4 className="text-lg font-bold text-stone-900">
                        {milestone.year}: {milestone.title}
                      </h4>
                      <p className="text-stone-600">{milestone.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Contact button */}
            <div className="text-center pt-8">
              <button className="px-8 py-3 text-base font-bold bg-amber-600/20 text-stone-900 rounded-lg hover:bg-amber-600/30 transition-colors cursor-pointer">
                Contact Us
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
