function capitalizeSentence(text) {
    // method -1

    text = text.toLowerCase();
    // console.log(text.split(' '));
    arr = text.split(" ");
    const capitalieString = arr
        .map((word) => word.toUpperCase()[0] + word.slice(1, word.length))
        .join(" ");
    console.log(capitalieString);

    // Metho-2
    // Not by me need to remember this

    console.log(
        text
            .split(" ")
            .reduce(
                (prev, current) =>
                    `${prev} ${current[0].toUpperCase() + current.slice(1)}`,
                ""
            )
    );
}
capitalizeSentence("tHis is a Sentence which need to capitalize");
