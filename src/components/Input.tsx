interface Inputprops  {
  placeholder:string;
  type?:string;
  reference?:any;
}

export const Input = (props:Inputprops)=>{
  return (
    <div className="w-full">
      <input
        ref={props.reference}
        placeholder={props.placeholder}
        type={props.type}
        className="
        w-full
        bg-[rgba(255,255,255,0.04)]
        border border-[rgba(255,255,255,0.1)]
        rounded-xl
        px-3 sm:px-4
        py-2.5 sm:py-3
        text-xs sm:text-sm
        text-[#f1f5f9]
        placeholder:text-[rgba(148,163,184,0.4)]
        outline-none
        transition
        focus:border-[rgba(99,102,241,0.6)]
        focus:ring-2 focus:ring-[rgba(99,102,241,0.12)]
        focus:shadow-[0_0_20px_rgba(99,102,241,0.1)]
        "
      />
    </div>
  )
}