import headerBg from "@/assets/resume-header-bg.jpg";

const Resume = () => {
  return (
    <div className="resume-wrapper">
      <div className="resume-paper">
        {/* Header */}
        <div
          className="resume-header"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(220,73%,12%,0.92) 0%, hsl(217,91%,22%,0.88) 55%, hsl(210,100%,32%,0.85) 100%), url(${headerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="resume-name">SreeMugdha Porandla</div>
          <div className="resume-title">Student · Digital Business &amp; Entrepreneurship</div>
          <div className="resume-header-line" />
        </div>

        {/* Body */}
        <div className="resume-body">
          {/* Sidebar */}
          <aside className="resume-sidebar">
            {/* Contact */}
            <div>
              <div className="sidebar-section-title">Contact</div>
              <div className="sidebar-item">
                <svg className="sidebar-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span style={{ wordBreak: "break-all" }}>shreemugdha6@gmail.com</span>
              </div>
              <div className="sidebar-item">
                <svg className="sidebar-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 12 19.79 19.79 0 0 1 1.17 3.31a2 2 0 0 1 1.84-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91-9885242501
              </div>
              <div className="sidebar-item">
                <svg className="sidebar-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />
                </svg>
                Karimnagar, Telangana
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <div className="sidebar-section-title">Technical Skills</div>
              <div>
                {["HTML", "CSS", "JavaScript", "Spreadsheets"].map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="sidebar-section-title">Languages</div>
              <div className="language-item">
                <div className="language-name"><span>Telugu</span><span style={{ fontSize: "0.75rem", opacity: 0.7 }}>Native</span></div>
                <div className="language-bar"><div className="language-fill" style={{ width: "100%" }} /></div>
              </div>
              <div className="language-item">
                <div className="language-name"><span>English</span><span style={{ fontSize: "0.75rem", opacity: 0.7 }}>Fluent</span></div>
                <div className="language-bar"><div className="language-fill" style={{ width: "85%" }} /></div>
              </div>
              <div className="language-item">
                <div className="language-name"><span>Hindi</span><span style={{ fontSize: "0.75rem", opacity: 0.7 }}>Novice</span></div>
                <div className="language-bar"><div className="language-fill" style={{ width: "30%" }} /></div>
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <div className="sidebar-section-title">Hobbies</div>
              <div>
                {[
                  { label: "Reading Books", icon: "📚" },
                  { label: "Drawing", icon: "🎨" },
                  { label: "Video Editing", icon: "🎬" },
                  { label: "Cooking", icon: "🍳" },
                ].map((h) => (
                  <div key={h.label} className="hobby-chip" style={{ display: "flex", marginBottom: "0.4rem", background: "hsl(210 100% 56% / 0.12)", border: "1px solid hsl(210 100% 56% / 0.25)", color: "hsl(210 60% 85%)", borderRadius: "999px", padding: "0.3rem 0.75rem", fontSize: "0.8rem", fontWeight: 500 }}>
                    <span style={{ marginRight: "0.4rem" }}>{h.icon}</span> {h.label}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="resume-main">
            {/* Professional Summary */}
            <section>
              <div className="main-section-title">Professional Summary</div>
              <p className="summary-text">
                Undergraduate BBA student in Digital Business and Entrepreneurship with a strong interest in marketing, branding, and digital content creation. Possesses strong communication skills, an entrepreneurial mindset, and a passion for continuous learning and innovation.
              </p>
            </section>

            {/* Career Objective */}
            <section>
              <div className="main-section-title">Career Objective</div>
              <p className="summary-text" style={{ borderLeftColor: "hsl(217 91% 35%)", background: "hsl(195 100% 88%)" }}>
                To build a career in digital marketing and brand strategy by leveraging creativity, data-driven thinking, and emerging technologies, while continuously learning and contributing to the growth of innovative organizations.
              </p>
            </section>

            {/* Education */}
            <section>
              <div className="main-section-title">Education</div>
              <table className="edu-table">
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Institution</th>
                    <th>Year</th>
                    <th>CGPA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BBA in Digital Business &amp; Entrepreneurship</td>
                    <td>IIM Bangalore</td>
                    <td><span className="edu-year">2024 – Present</span></td>
                    <td><span className="edu-cgpa">—</span></td>
                  </tr>
                  <tr>
                    <td>Intermediate</td>
                    <td>Aaditya Junior College</td>
                    <td><span className="edu-year">2022 – 2024</span></td>
                    <td><span className="edu-cgpa">8.2</span></td>
                  </tr>
                  <tr>
                    <td>SSC</td>
                    <td>Paramita High School</td>
                    <td><span className="edu-year">2021 – 2022</span></td>
                    <td><span className="edu-cgpa">9.3</span></td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Strengths */}
            <section>
              <div className="main-section-title">Strengths</div>
              <div>
                {[
                  "Time management skills",
                  "Communication skills",
                  "Critical thinking",
                  "Problem-solving skills",
                ].map((s) => (
                  <div key={s} className="strength-item">
                    <div className="strength-dot" />
                    {s}
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>

        {/* Footer */}
        <div style={{
          background: "hsl(195 100% 91%)",
          borderTop: "1px solid hsl(var(--border))",
          padding: "0.75rem 2.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          fontSize: "0.75rem",
          color: "hsl(217 91% 35%)",
          fontWeight: 500,
          letterSpacing: "0.04em",
        }}>
          <span style={{ opacity: 0.5 }}>◆</span>
          <span>BBA in Digital Business &amp; Entrepreneurship · IIM Bangalore · 2024</span>
          <span style={{ opacity: 0.5 }}>◆</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
