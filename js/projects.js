const durianTemplate = document.createElement('template');
durianTemplate.innerHTML = `
  <section class="example">
    <img src="assets/images/durian.png" alt="durian">
    <div class="description">
        <p><a href="https://github.com/spoorn/durian">durian</a></p>
        <p>durian is an open source client-server networking library built on top of the QUIC protocol which is implemented in Rust by quinn.</p>
        <p>It provides a thin abstraction layer above the lower-level details of connection management, byte management, framing, and more, to make writing netcode easier and allow the user to focus on the messaging contents instead. Serialization and deserialization are built into the APIs so you can send and receive exact Packets as structs for ease of development.</p>
        <p>durian is a general purpose library, but was made primarily for me to dabble in game development. It has been tested and working with the Bevy game engine.</p>
        <div style="white-space: pre-wrap">
<p>Full Rust documentation can be found at&nbsp;</p><a href="https://docs.rs/durian/latest/durian/">https://docs.rs/durian/latest/durian/</a>
<p>Crates.io:&nbsp;</p><a href="https://crates.io/crates/durian/">https://crates.io/crates/durian/</a>
        </div>
    </div>
  </section>
`;

const mangovillageTemplate = document.createElement('template');
mangovillageTemplate.innerHTML = `
<section class="example">
    <img src="assets/images/mango-png-icon-25.png" alt="mango">
    <div class="description">
        <p id="mangovillage-anchor"><a href="https://github.com/spoorn/mangovillage">Mango Village</a> - <a href="showcase.html#showcase-mangovillage" class="showcase-link">(Showcase)</a></p>
        <p>&nbsp;</p>
        <p>In progress 3D Pixel MMORPG, using my own client-server networking library durian, fully 100% in Rust.</p>
        <p>Uses the Bevy game engine (ECS), rapier physics engine, blender for 3d modeling, and others.  My intention for this project is to learn developing games fully end to end, and be a proof of concept for using Rust in a complex multiplayer game.</p>
        <p>My dream is to reinvigorate the MMO/RPG genre where many people, including myself, fell in love with gaming.</p>
    </div>
</section>
`;

document.getElementById("highlights").getElementsByTagName("section")[0].append(durianTemplate.content.cloneNode(true), mangovillageTemplate.content.cloneNode(true))

let rustProjects = document.getElementById("rust-projects").getElementsByTagName("section")[0]
rustProjects.insertBefore(mangovillageTemplate.content.cloneNode(true), rustProjects.getElementsByTagName("section")[0])
rustProjects.insertBefore(durianTemplate.content.cloneNode(true), rustProjects.getElementsByTagName("section")[0])