const http = require('http');

async function runLiveTests() {
  console.log("==========================================");
  console.log("STARTING LIVE NEXT.JS API INTEGRATION TESTS");
  console.log("==========================================");

  const testPayloads = [
    {
      name: "1. Valid Admission Enquiry",
      url: "http://localhost:3000/api/admissions",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        parent_name: "Anita Singh",
        child_name: "Vivaan Singh",
        child_age_or_class: "Nursery",
        phone: "9876543210",
        email: "anita.singh@example.com",
        preferred_contact_method: "phone",
        message: "Enquiring about nursery admission procedure.",
        submission_duration_ms: 3000,
      }),
      expectedStatus: 200,
      expectedSuccess: true,
    },
    {
      name: "2. Invalid Admission Enquiry (Bad Phone)",
      url: "http://localhost:3000/api/admissions",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        parent_name: "Anita Singh",
        child_name: "Vivaan Singh",
        child_age_or_class: "Nursery",
        phone: "123", // invalid
      }),
      expectedStatus: 400,
      expectedSuccess: false,
    },
    {
      name: "3. Disallowed GET Method on Admission",
      url: "http://localhost:3000/api/admissions",
      method: "GET",
      headers: {},
      body: null,
      expectedStatus: 405,
      expectedSuccess: false,
    },
    {
      name: "4. Valid Contact Enquiry",
      url: "http://localhost:3000/api/contact",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Vikram Yadav",
        phone: "9988776655",
        email: "vikram@example.com",
        subject: "Campus Visit Query",
        message: "Can we visit the school premises on Saturday at 10 AM?",
        submission_duration_ms: 2500,
      }),
      expectedStatus: 200,
      expectedSuccess: true,
    },
    {
      name: "5. Invalid Content-Type (text/plain)",
      url: "http://localhost:3000/api/contact",
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: "plain text",
      expectedStatus: 415,
      expectedSuccess: false,
    },
  ];

  for (const t of testPayloads) {
    try {
      const res = await fetch(t.url, {
        method: t.method,
        headers: t.headers,
        body: t.body,
      });
      const data = await res.json();
      const statusMatch = res.status === t.expectedStatus;
      const successMatch = t.expectedSuccess ? data.success === true : data.success === false || res.status === 405;

      console.log(`TEST [${t.name}]: Status = ${res.status} (Expected ${t.expectedStatus}) | Result = ${statusMatch && successMatch ? "PASS" : "FAIL"}`);
    } catch (err) {
      console.error(`TEST [${t.name}] Error:`, err.message);
    }
  }

  console.log("==========================================");
  console.log("LIVE API TESTS COMPLETE");
  console.log("==========================================");
}

runLiveTests();
