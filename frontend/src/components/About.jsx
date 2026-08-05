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
                  'Tell more about you'}
              </p>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
