import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";

const username = site.social.github.split("/").pop();

async function getContributions() {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 86400 } },
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data?.contributions?.slice(-140) ?? null;
  } catch {
    return null;
  }
}

function levelOpacity(level) {
  return [0.08, 0.3, 0.55, 0.8, 1][level] ?? 0.08;
}

export default async function GithubActivity() {
  const contributions = await getContributions();
  if (!contributions?.length) return null;

  const weeks = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  return (
    <Reveal className="mt-16 border-t border-border pt-10">
      <div className="flex items-center justify-between">
        <span className="kicker">Recent GitHub Activity</span>
        <a
          href={site.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted hover:text-accent"
        >
          @{username}
        </a>
      </div>
      <div className="mt-5 flex gap-1 overflow-x-auto pb-2">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day, di) => (
              <div
                key={di}
                title={`${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`}
                className="h-2.5 w-2.5 rounded-[2px] bg-accent"
                style={{ opacity: levelOpacity(day.level) }}
              />
            ))}
          </div>
        ))}
      </div>
    </Reveal>
  );
}
