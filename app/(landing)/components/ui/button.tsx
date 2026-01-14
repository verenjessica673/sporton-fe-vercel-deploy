type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    variant?: `primary` | `dark` | `ghost`;
    size: "normal" | "small";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, className, variant = "primary", size = "normal", ...props}: ButtonProps) => {
    const baseStyles = "inline-flex gap-2 duration-300 justify-center items-center cursor-pointer hover:scale-105";

    const variants = {
        primary: 'bg-primary text-white hover:bg-primary/80',
        dark: 'bg-dark text-white hover:bg-gray-800',
        ghost: 'bg-transparent text-dark hover:bg-gray-100'
    };

    const sizes = {
        normal: "px-9 py-4",
        small: "px-7 py-[10px]"
    };

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >          
            {children}
        </button>
    );
};

export default Button;