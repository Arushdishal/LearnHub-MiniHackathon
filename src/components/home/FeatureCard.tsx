type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;