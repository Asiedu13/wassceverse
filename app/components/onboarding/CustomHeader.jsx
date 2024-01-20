export function CustomHeader({title, subtitle}) {
    return (
      <header className="my-[30px] px-[20px] w-[90vw]">
        <h1 className="text-3xl mb-[20px] w-[300px] ">
          {title}
        </h1>
            <p>{ subtitle}</p>
      </header>
    );
}