import { useAdmin } from '../context/AdminContext';

export default function EditableField({
  value,
  onChange,
  onSave,
  type = 'text',
  className = '',
  displayClassName = '',
  tag: Tag = 'span',
  placeholder = 'Enter text...',
}) {
  const { isEditMode } = useAdmin();

  if (!isEditMode) {
    return <Tag className={displayClassName || className}>{value}</Tag>;
  }

  if (type === 'textarea') {
    return (
      <textarea
        className={`admin-textarea ${className}`}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onSave}
        placeholder={placeholder}
      />
    );
  }

  return (
    <input
      type={type}
      className={`admin-input ${className}`}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onSave}
      onKeyDown={(e) => e.key === 'Enter' && onSave?.()}
      placeholder={placeholder}
    />
  );
}
