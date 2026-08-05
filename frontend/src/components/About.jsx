import ScrollReveal from './ScrollReveal';
import EditableField from './EditableField';
import { useAdmin } from '../context/AdminContext';

export default function About({ profile, onUpdate }) {
  const { isEditMode } = useAdmin();

  const handleFieldChange = (field, value) => {
    onUpdate({ ...profile, [field]: value });
  };

  const handleSave = () => {
    if (profile?.id) {
      onUpdate(profile, true);
    }
  };

  return (
    <section id="about" className="relative z-10">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-accent-blue font-medium text-sm uppercase tracking-widest mb-3">
            Get to know me
          </p>
          <h2 className="section-title gradient-text-static">About Me</h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass p-8 sm:p-12 mt-10 max-w-4xl">
            {isEditMode ? (
              <EditableField
                value={profile?.about}
                onChange={(v) => handleFieldChange('about', v)}
                onSave={handleSave}
                type="textarea"
                placeholder="Write about yourself..."
              />
            ) : (
              <p className="text-slate-300 leading-relaxed text-lg">
                {profile?.about ||
                  'Aspiring DevOps Engineer with overall 4+ years and backed by 2+ years of strong Technical Support experience, skilled in managing Networking products, monitoring network topologies for zero downtime, and providing robust Infrastructure support.Currently transitioning into the DevOps domain with hands-on knowledge in AWS, Azure, Jenkins, Docker, Kubernetes, Ansible, Terraform, GitHub, Grafana, and Prometheus.
Passionate about automation, cloud technologies, and building reliable CI/CD pipelines to improve efficiency and performance.

Always eager to learn, contribute, and grow in a challenging DevOps environment.

'}
              </p>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
