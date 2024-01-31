import { getAllJobs } from "@/lib/actions/job.actions";
import Image from "next/image";
import Link from "next/link";

const JobsPage = async () => {
  const result = await getAllJobs();

  return (
    <div className="flex w-full flex-col gap-5">
      {result.map((e: any) => (
        <div
          key={e.job_apply_link}
          className="card-wrapper flex flex-row rounded-[10px] p-9 sm:px-11"
        >
          <div className="mr-5 size-14 self-center">
            {e.employer_logo ? (
              <Image
                src={e.employer_logo}
                alt="employer logo"
                width={52}
                height={52}
                className="rounded-sm"
              />
            ) : (
              <Image
                src="/assets/images/site-logo.svg"
                alt="employer logo"
                width={52}
                height={52}
              />
            )}
          </div>

          <div className="flex w-full flex-col gap-5">
            <div className="flex flex-row items-center justify-between">
              <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
                {e.job_title}
              </h3>
              <div>
                <div className="small-regular ml-8 rounded-sm bg-slate-200 px-4 py-2">
                  {e.job_city}, {e.job_country}
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-5">
                {e.job_employment_type} {e.employer_name}
              </div>
              <Link
                href={e.job_apply_link}
                className="primary-text-gradient flex"
              >
                View job{" "}
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="arrow right icon"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobsPage;
