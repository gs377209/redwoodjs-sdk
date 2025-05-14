import { defineScript } from "rwsdk/worker";
import { db, setupDb } from "@/db";

export default defineScript(async ({ env }) => {
  setupDb(env);

  const createApplication = async () => {
    await db.application.create({
      data: {
        salaryMin: "100000",
        salaryMax: "120000",
        jobTitle: "Software Engineer",
        jobDescription: "Software Engineer",
        postingUrl: "https://redwoodjs.com",
        dateApplied: new Date(),
        user: {
          connect: {
            id: "5225345d-da96-4e3c-ab3e-825481ceea09",
          },
        },
        applicationStatus: {
          connect: {
            id: 1,
          },
        },
        company: {
          create: {
            name: "RedwoodSDK",
            contacts: {
              create: {
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@example.com",
                role: "Hiring Manager",
                userId: "5225345d-da96-4e3c-ab3e-825481ceea09",
              },
            },
          },
        },
      },
    });
  };

  await createApplication();

  console.log("🌱 Finished seeding");
});
