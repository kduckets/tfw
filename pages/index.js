import Head from 'next/head'
// import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Flock Wars</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&family=Hachi+Maru+Pop&family=Homemade+Apple&family=Inconsolata&family=Caveat&family=Arapey&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

        <div className="fullHeightCentered">
        <h1 className="title">
         <span>The </span> <span>Flock </span> <span>Wars</span>
         <span><img src="/birds-wire.png" className="titleImage"></img></span>
        </h1>
        </div>

  

        <div className="prologue">
        <p>Prologue</p>
  
        <p>
        <small>

        The year was 2020. Most great thinkers of earth had sensed the struggle and unrest brewing for 
        quite some time, but very few were prepared for the events that actually transpired. Sickness, 
        suffering, and death were just the tip of the iceberg as an already unstable human race was 
        ravaged by plague, cultural divergence, and warfare.

        <br/> <br/> What follows is a collection of diary entries, news articles, 
        letters, and other miscellaneous artifacts from one group of fairly insignificant dudes, 
        mostly not dads, who had been forced to stay in their homes and play video games during this unprecedented year.
     
        {/* <Typewriter
          options={{
            autoStart: true,
            loop: false,
            delay: 69
          }}
          onInit={(typewriter) => {
            typewriter
            .typeString('The year was 2020. Most great thinkers of earth had sensed the struggle and unrest brewing for quite some time, but very few were prepared for the events that actually transpired. Sickness, suffering, and death were just the tip of the iceberg as an already unstable human race was ravaged by plague, cultural divergence, and warfare.')
            .typeString('<br/> <br/> What follows is a collection of diary entries, news articles, letters, and other miscellaneous artifacts from one group of fairly insignificant dudes, mostly not dads, who had been forced to stay in their homes and play video games during this unprecedented year.')
            .typeString('<br/> <br/>')
            .pauseFor(1800)
            .typeString('This is the story of')
            .pauseFor(1000)
            .typeString(' some dudes playing online Risk.')
            .pauseFor(1420)
            .deleteChars(32)
            .pauseFor(1000)
            .typeString(' <i>The Flock Wars.</i>')
            .start();
          }}
        /> */}
    </small>
           <br/>
           <br/>
        </p>
        </div>

      <div className="fullHeight">
      <p className="diary">
        <h2>April 20, 2020</h2>
   
      The unrest amongst the dudes has lead to a few seemingly harmless battles to air some petty grievances. 
      Tonight I ran outta time just as I was hitting the fortify button - an infuriating mistake to say the least. 
      Bruised, but not defeated from the bloody Caso-Johnson debacle, General Johnson's army perforated the open gap and wreaked havoc on the southern region of 
      the divided United States. 
      The fight continued in Canada but it was not enough to take down the almighty Johnson. With a damaged south and a once cololorful map 
      now only scattered with red, General Johnson was able to pull out of the south, scatter soldiers up north, and claim victory once again.

      Johnson's patient strategy has proven quite difficult to defeat. Tonight's battle is over, but the scars remain. 
    
      </p>
     
      <p className="diary">
      <img src='/xo.png' height="200px"></img>
      
      &nbsp;&nbsp;   &nbsp;&nbsp;    ^ the Johnson finding holes
      </p>
      </div>

      <div className="fullHeight">
      <p className="narration">Following a weekend of minor quarrels, the hints of chaos seemed to deflate almost as 
      quickly as they had distended. A temporary ceasefire was agreed upon, and peace talks were underway in an effort
      to prevent large-scale warfare. 
      <br/>
      <br/>
      </p>
 
      </div>

<div className="fullHeight">
   <p className="newsTitle">
<h2>Johnson's Reign In Doubt</h2>
<h4>May 3, 2020</h4>
</p>
<p className="news">
The ceasefire proved costly for General Johnson’s troops, 
as the undefeated veteran collapsed to two previously 
winless armies in yet another bloody Saturday night. 
General Dowals, new on the scene of war, quickly rose 
through the ranks after wiping Deutschland clean of the 
Almighty Johnson’s post-ceasefire army. While Johnson 
gathers his battered troops to mansplain the follies of hubris, 
Jr. Lieutenant the Caso, humiliated to be the last war-torn nation without a victory, 
scolds his soldiers and quietly plots his revenge.
        </p>
      </div>

  <div className="fullHeight">
  <p className="newsTitle">
  <h2>Johnson Demolishes France; Dowals Peaks Prematurely</h2>
  <h4>May 10, 2020</h4>
  </p>
  <p className="news">
 The eerie tranquility of the DMZ was once again shattered last night as Ol General Patch spiked his fancy wine-beer, 
  loudly declaring warfare across Europe. The destruction continued with the Almighty Johnson 
  slapping through France for the first victory of the evening. The Green army was swiftly cast to the 
  southwest corner for the following battle, relying on carefully executed alliances and manipulative 
  lawyer-speak just to survive. The piss-colored Yellow army, also fighting in the south, was prematurely 
  destroyed in both battles, leaving General Daddison with a fading taste of victory and an army 
  hungry for vengeance. As tensions grew late into the hours of darkness, General Dowals broke 
  a strong alliance with General Patch and began his valiant march through the north, only to be stopped 
  devastatingly short at just 67% of the map. The failed climatic offensive left the door open for General Kev and his Red army to 
  bleed across the north, claiming the final victory of the night from his tiny camp on Randall’s island.
  </p>
  <br/>
  <p className="story">
    <small>
  <i>In war, whichever side may call itself the victor, there are no winners, but all are losers,&nbsp;</i> Jr. Lieutenant 'the' 
  Caso tells himself as he contemplates his failed alliance strategies. The Junior Lieutenant looks over his 
  Blue army, now appearing purple from the blood soaked uniforms, and quietly tells them to go home and “thank 
  your mothahs”.
  </small>
 </p>
  </div>

      <div className="fullHeight">
      <p className="narration">
      As the turmoil continued to simmer, politicians ruthlessly bickered from high atop their castle walls. While egos squabbled, the fragile ice beneath the soldiers’ feet began to crack. 
      Before long, another armistice had been broken. The calls for peace had been silenced.
      </p>
      <p>Every so often, calls for harmony will nourish the potential for war...</p>
     
      </div>

      {/* <div className="fullHeight">
      <p className="narration"><small>An excerpt from General Kev’s diary:</small></p>
      <p className="diary"><b>May 4, 2020</b></p>
      <p className="diary">
      Alternating between peace and war seems to be the new normal. It's unclear how long this will last, however it doesn't
       seem to be ending any time soon. Most of the other leaders seem reasonable, so perhaps we can come to some sort of agreement. The only one 
       I'm truly nervous about is the Jr. Lieutenant. He seems too inexperienced to be dealing with this caliber of war. Someone should keep an eye on him.
      
      </p>
      </div> */}

<div className="fullHeight">
<img src="/mushroom.png" className="center"></img>
</div>

<div className="fullHeight">
<p className="newsTitle">
<h2>The Caso Gets Questionable Win</h2>
<h4>May 17, 2020</h4>
</p>
<p className="news">
  Junior Lieutenant the Caso claimed his first victory of the war last night, although rumors of chemical 
    warfare could prove diminishing to the win. “I felt loopy, I certainly wasn’t myself,” General Daddison stated to 
    reporters when asked why he didn’t use his cards at a crucial battle moment. “I guess it coulda been the anchovies,” 
    he added, apprehensively. In response to the allegations, Lieutenant the Caso began to describe an awkward dream he 
    had about the Yellow army’s commander, followed by some patronizing advice to the seasoned General. The topics of 
    chemical warfare and anchovies were suspiciously avoided.
  <br/>
  <br/>
 The only other leader willing to comment on the developing 
    controversy was General Stevie the B, simply stating, “fucking pussies”. 
    The General also requested the press to remind its readers, “the B stands for Bossin”.</p>
  </div>


<div className="fullHeight">
<p className="story"><small>June 7, 2020</small>
<h2>The Many Colors of War</h2>
</p>
<p>Chaos and crimes of passion overshadowed any hope for actual strategy, as verbal conflict blended with 
senseless violence to fuel the cycle of incessant devastation.</p> 

...

<p className="story"><small>The pale echoes of peace were swiftly silenced as Junior Lieutenant 
'the' Caso dropped his curry dinner, allegedly distracted by the sirenesque 
sounds of General Dowals’ mistress. Filled with shame and regret, the Lieutenant 
cracked a can of watery tuna and heeded the calls of war to fill the painful void. 
The 'drop heard round the world' proved unfortunate for the Red army, who shared a border 
with the humiliated Lieutenant looking to unleash his anger on a nearest neighbor. A battle of 
passion broke out, resulting in a depleted Red army with no option but to beg for an alliance with 
General Dowals in the north. Desperate for companionship in wartime, the General accepted the offer 
and the Orange-Red army marched to destroy any hopeless soldiers in its path. Unable to band together 
against the Goliath, the nations resorted to blame and slander as they fell pitifully to Orange, all 
while a tuna-breathed Lieutenant continued to stir the pot of conflict from the grave. 
<br/>
<br/>
Perhaps out of both breathe and energy, the yelling calmed in Africa as the nations all turned against Orange, 
leaving an opening for a win-starved Purple army to deploy a fresh strategy. The decision to not camp in a 
single country proved fruitful for Ol General Patch, as he was able to build and bleed through the war-torn 
nations for a much needed Purple victory.
<br/>
<br/>
The battle turned to the grounds of the Roman Empire where the generals, 
seemingly unable to learn from the past, began to repeat history (again). The 
coastal quarrels quickly boiled over, leaving room for the armies inland to grow and plot. 
With a valiant effort to break the infinite loops of the days of old, the Red army marched with 
hope and passion, only to fall by the limits of their own weaponry. With the privilege of superior 
funding, artillery, and technology, General Johnson crushed the hope of the passionate Red army (and 
perhaps the world), allowing a blood-colored history to once again, repeat itself.</small></p>

</div>

<div className="fullHeight">
<h2>June 14, 2020</h2>
  <p> The Gordian knot of military bureaucracy just wasn’t worth fighting today. </p>

<p className="story">
<small>Fed up with the constant ridicule from his peers, Jr. Lieutenant the Caso reluctantly finished his mound of paperwork, 
anxious to finally order the ‘General the Caso’ nameplate to display prominently on his desk. <i>I’ll probably order the 
silver - to match the Live, Laugh, Love sign,</i> he pondered as he knocked on his superior’s door.
<br/>
“Come in,” the staunch old man ordered, clearly aggravated by the Jr. Lieutenant’s interruption and disheveled appearance. 
“Back again for the promotion plea I see?” The Jr. Lieutenant held back his loathe for the expendable old man. 
<br/>
“Yes, sir,” the Caso said. “I’ve got everything you asked for this time.” 
He handed the neatly stacked, laminated documents to the systemic man and pretended to respect the outdated procedures. 
“It’s all there, sir. May I have the title now?”
<br/>
“Not yet, Lieutenant,” the man sneered as he stood to face the Caso. 
“Put your goddamn crimes of passion to rest and secure a real win tonight. 
Then, if you’re lucky, I might consider your request, <i>Lieutenant</i>.” The Caso idly saluted and stomped back to his office to prepare a 
battle plan. He sighed as he noticed a new scratch on the <i>Junior Lieutenant</i> nameplate, sitting sluggishly on his desk.
<br/>
<br/>
Back out on the battlefield the soldiers were tired and the violence seemed infinite. Unknowingly fighting for nothing other than a broken man’s new nameplate, 
the Blue army obeyed their orders and listened to the Jr. Lieutenant’s passionately mediocre speech. “You only live once, so go fight for it!” concluded the 
sermon with a lackluster ‘hoo-rah’ as the army’s response. The soldiers knew not what they were fighting for, 
but nonetheless blindly adhered to the lines of command. “It is what it is,” a veteran soldier whispered to a questioning young recruit 
as they all watched the Jr. Lieutenant prepare the artillery for another inevitable battle.
<br/>
<br/>
The night began, once again, with bloodshed. Several battles immediately rang out across the nations, with frustrated generals 
continuing the attack orders amidst the truly random outcomes.  General Daddison, typically at the wrong end of the arbitrary 
results, held strong even as the nation’s leaders were conspiring against him. The conspiracy came to an abrupt halt as the 
Yellow army commander entered the public comms channel, and each nation worked to secure a strategic territory and make neighborly 
agreements - albeit only through necessity. 
<br/>
<br/>
The Caso, settling in the northwest, was sure this was the one. Repressing his desire to commit crimes of passion, the Jr. 
Lieutenant felt confident in his alliances and territory, with a vision of a shiny new nameplate gaining clarity. 
General Johnson, a warrior for the greater good, noticed the rare discipline of the Junior Lieutenant and concluded this was too 
much power for the low-ranked leader. Johnson decided to break up the Blue army’s stronghold in return for nothing but a 
few empty ‘thank yous’ from the other world leaders. Meanwhile, a desperate Yellow army was eagerly waiting at 
the door to clean up the Blue/Green mess. General Daddison swept through the scraps of war, quickly gaining momentum on the 
coattails of the Green army’s good deeds. Having not seen endgame in quite some time, the Yellow commander made a miscalculated 
push, and his scent of victory faded as quickly as it had surfaced. A patiently waiting Red army marched westward for the final cleanup blow to the 
battle-ridden lands.
<br/>
<br/>
Jr. Lt. 'the' Caso was furious.</small>
</p>
</div>

<div className="fullHeight">
  <p className="narration">
    As the Summer of 2020's grappling heart continued to bleed out, the fighting continued in lieu of patching 
    open wounds. Despite being ultimately meanlingless, small victories provided vital jolts of energy 
    to the desperate individuals lucky enough to aquire them.
  </p>
</div>

<div className="fullHeight">
<p className="newsTitle">
<h2>Blue Virus Loots Pathetic 'Victory'</h2>
<h4>June 20, 2020</h4>
</p>
<p className="news">
In a pitiful display of desperation, Jr. Lieutenant the Caso utilized despicable war tactics such as 
inciting chaos, camping, shielding, tear gassing civillians, and attacking without formally breaking alliances to 
steal a dissatisfying win from the warring nations. Analysts are left questioning the legitimacy of the 
Blue nation and are considering pulling global funding from the deplorable boys in blue. Even war has its 
limits, and the Blue army has incessantly shown it will act without shame, continuing to cross lines to 
maintain status as an admissible organization. Any respect and authority the nation once held is certainly dwindling, if not already nonexistent. 
The nations of the world will be holding several meetings over the course of the next few months to determine 
the fate of the Blue army and its questionable constituents.
</p>
</div>

<div className="fullHeight">
<p className="story">
  <h3>June 21, 2020</h3>
<small>
“Wipe that shit grin off your face before I demote you back to infantry, <i>Junior Lieutenant</i>.” 
<br/>
<br/>
The Caso’s superior hung his head in disgrace, unable to look his subordinate in the eye. Caso’s grin quickly faded. 
<br/>
“In all my years, I have never seen such poppycock. Camping at the fucking pier? Attacking the north for no reason? 
And now every headline is calling you the new virus in town? Your bullshit ‘win’ off the coattails of General Johnson’s 
prudent strategy is a PR catastrophe. I’m sure you’re now aware of the calls for a full blue systemic reform? The boys 
in blue were sitting pretty, Caso. For centuries. Nobody questioned our authority. Our funding had been skyrocketing. 
Why would we change policies that kept us on top for hundreds of years? We <i>just</i> got finished convincing the public we 
have an immigration problem to throw more military dollars at - and now, this. A god damn calamity, Caso. With your face 
on the poster.”
<br/>
The superior officer collapsed into his chair, too fat and exhausted to fully comprehend the mess Caso had left in his wake. 
An unpleasant moment of silence hovered ominously in the office before the old superior spoke again. 
<br/>
<br/>
“I hear the original virus is beefing up on breakfast burritos and on the hunt for a new color. If we don’t wipe the 
papers clean of this disaster immediately, we just might have an opening on Blue’s leadership team. And if the word 
‘defund’ crosses my desk one more time, you can kiss any chance at a promotion in a blue uniform goodbye, <i>for life</i>." The superior suspired.
<br/>
"Get out of my office, it smells like you defecated yourself.”
<br/>
Caso, shocked at his superior’s analysis of his tiresome win, paused before he made his next move.
<br/> 
“A win’s a win though, right, sir?”
<br/>
“GET OUT!” the superior roared, finally gazing directly into the Caso’s eyes. 
The Junior Lieutenant turned and scampered out, suddenly aware that he had, in fact, shit himself.
</small>
</p>
</div>

<div className="fullHeight">
  <p className="narration">
  With no end in sight, some took escape to the wilderness
   to seek solace from the isolation and communal devastation. Nature is left once all else is distilled.
  </p>
</div>

<div className="fullHeight">
  <p className="story">
    <h3>June 29, 2020</h3>
<small>
“That squirrelly Lieutenant is becoming my biggest regret. What are my options?” The old Blue superior 
barked, almost relieved by the news of his Junior Lieutenant’s sudden disappearance. 
<br/>
“Desertion carries a maximum punishment of dishonorable discharge, forfeiture of all 
tokens, and confinement of up to five weeks, sir.” 
<br/>
“Fine, find him and lock him up.” 
<br/>
“Well sir, for desertion during a time of war, the <i>ultimate punishment</i> may be applied...”
<br/>
“Just find him. Check the rivers, we know he had some poopy pants to 
clean. And call the old virus, we have an open position.”
<br/>
<br/>

...
<br/>
<br/>
</small>
</p>

<p className="story"><small>News of Caso’s peace strike spread like wildfire and the generals were eager to take advantage 
of the chance at a legitimate battle. The war moved to the grounds of the freedom-loving US of A, a 
land where irony and juxtaposition had gone long past the point of humility. A place where extreme 
individualism was posed to destroy a conceptual ideal perpetually doomed before the ink had even dried. 
<i> All’s fair in love and war.</i> 
</small>
</p>
<br/>
<br/>
<p className="newsTitle">
<h2>General Serg Marches in Blue</h2></p>
<p className="news">



As fate would have it yesterday evening, General Dowals was given the New England territory, formerly ruled by 
King Brady who had since fled south, presumably to gather fresher oranges. General Dowals 
quickly stacked the few borders of the advantageous territory, a privilege the elitist coasties 
typically squander. Meanwhile, Ol General Patch claimed sunny California and set up camp 
in the west, with the virus and General “Switzerland” Johnson taking up the middle of the divided 
mess of a country. Without many options, the Red army made an attempt to seize the south, now 
sandwiched between the Orange and Purple bicoastal strongholds. Forced to choose a side, the Red army 
pledged their allegiance to the east, figuring the hard-skinned Patriots would then march north to 
destroy the weak, lame-ass Swiss neutrality approach of the Green army. Focusing on westward expansion, the 
Red army declared war against an encroaching Purple army, making shallow claims against General 
Patch’s IT unit to stir the caldron of conflict. The contention ultimately proved disastrous for 
both nations, as a weakened Purple army spent its remaining 
troops crime of passioning the Red army, shouting, “how’s this math you fucking nerd”. 
<br/>
<br/>

Following the bloody battle in the west, tensions rose back east as General Dowals 
considered breaking his treaty with the war-torn Reds. Desperately pleading with the General 
to march north to prove to the world General Johnson’s bullshit foreign policy won’t hold any 
longer, the Red army commander lost the argument, consequently losing the battle. The Green 
army’s silence once again overshadowed the loud yells of bullshit, as the whiskey-fueled 
arguments and drama left the country thin and weak, leaving an opening for the silent Green puppet master to march to victory. 
<br/>
<br/>

The war moved north to Canada, but it seems the scribe’s notes were scrambled by the 
likes of a Canadian samsquantch, as no physical records of the battle were found. 
Rumors of a win by General Dowals have since surfaced, although the media cannot 
confirm or deny such claims without hard evidence. 
<br/>
<br/>
...
</p>
<p className="story">
  <small>
“Strategies are like underwear,” the old Blue superior told his new recruit following an acceptable first performance in blue. 
“Everyone has some, and they are all susceptible to being destroyed by a unruly heap of shit. 
We need to wipe the news clean of the disaster and illegitimate wins Lieutenant Caso caused for the boys in blue. 
A virus might just be the chaos we need to distract the public and clear our record to go back to the days of old. 
Keep it up out there, 
General Serg. If you succeed, we may again one day enjoy the privilege of invincibility the blue uniform once stood for. 
Stir the bullshit up, but do so under the radar. We don’t need another pants-shitter steering this ship.”
<br/>

“Yes, sir” General Serg replied.
</small>
</p>
</div>

<div className="fullHeight">
  <h1><b>July 4, 2020</b></h1>

  <p>
    <small>
Bombs blasting, earth shattered, flattering lights amongst smattered stars above scattering 
mortals huddled from the endless splatter. An armistice to take a stand against blood, death, 
yells, passion, and crime. Polarization pushes the pervasive poles of civilization creating a 
tyrannical tear through the ligaments of a society screaming, <b>‘freedom’</b>. Disagreement, ignorance, 
elitism and personal gain; the seeds of hideous flowers in the flourishing garden of war. Will the 
perennial ceasefire in remembrance of revolution prove to progress the power of peace any further? Or will it 
be mowed down by the detestation of individuals hypothetically hinged to create a hive of hate constructed 
seemingly for the purpose of the Hell of War. Only time, per usual, will yell.
</small>
</p>
<p>
...
</p>
<p className="story">
  <small>
“The virus and I have returned from the desert with an arrived agreement,” the Junior Lieutenant said, 
firmly holding a sawed off double-barreled shotgun directy at his superior’s dilapidated heart. 
“It would be in your best interest to sign this.” 
<br/>The superior officer showed no emotion, exhausted from the tumultuous months of his recent past. He took a quick glance at the contract held by General Serg and looked back toward the barrels of the gun. 
<br/>
“Over my dead, shitless-pantsed, body.”
<br/>
“Very well then, sir.”
<br/>
And with the simple motion of a contracting finger, blood was dispersed on a night of proposed peace, as a Junior Lieutenant instantaneously acquired newfound power. 
</small>
  </p>
  <div class="image-ranger"></div>
</div>

<div className="fullHeight">
  <p className="story">
<small>
Blood-soaked and traumatized from the gruesome event carried out by Lieutenant the Caso, General Serg grabbed a 
blue uniform from the dead superior’s closet and haphazardly parted ways with the Lieutenant. 
Refuge was offered at the Orange camp, a desirable escape for The Virus as General Dowals’ 
<i>&nbsp;Don’t Ask Don’t Tell</i> policy was well established amongst the below-the-radar types. Sporting the purloined blue uniform, General Serg entered the Orange Gates under diplomatic immunity and prepared for what would be a long, bloody, emotionally draining evening of war.
</small>
</p>
</div>

<div className="fullHeight">

<p className="newsTitle">
<h2>Controversial Turn Miss Results In Big Loss For General Dowals</h2>
<h4>July 19, 2020</h4>
</p>
<p className="news">
The Orange base proved advantageous for General Serg, 
as evidence of a private comms channel between the generals recently surfaced. 
The evidence is spotty and contains several lewd transmissions, so the media 
will not be publishing a transcript at this time. 
<br/>
<br/>
Although the Yellow army fell short on truly random rolls once again, 
the remaining five nations battled for four hours and twenty minutes, 
marking it the longest, bloodiest, yellingist battle of the war to date. 
The battle can mostly be described as a stalemate, with each nation getting 
their own glimpse of victory, only to be squandered by the constant shifting of 
alliances by the others. The unexpected climax of the turmoil arrived following a 
controversial turn-miss by General Dowals. The “victim” claimed he was hacked by an enemy 
nation on a turn that, according to the General, was going to be an attempted victory march. 
The media is awaiting additional evidence as to whether this was a hack, a bug, or a logistical 
flaw in the Orange Army’s communications department. Either way, the controversy stirred up 
enough distraction for the Virus to spread, and eventually claim victory over a war-torn land.
<br/>
<br/>
Immediately following General Serg’s triumph, an intercepted transmission was 
acquired by an anonymous source associated with the press, and will be published, unaltered:
<br/>
<br/>
TO: JR LT “T.” CASO<br/>
FROM: C. the V.<br/>
MEMO: INFILTRATED ORANGE BASE. BLUE VICTORY ESTABLISHED. <br/>
HACK SUCCESSFUL.<br/>
<br/>
<br/>

END MEMO
</p>
</div>

<div className="fullHeight">
  <p className="narration">
    The Summer of 2020 ended more peacefully than it began, as the world entered an autumn with slight hints of deceptive 
    normalcy. A relatively friendly fall would soon give rise to a warring winter with an overdose of 
    tension, conflict, and demise threading through every fabric of humanity.
    They say it tends to be darkest just before the dawn...
  </p>
  <img src="/yarn.png" className="center"></img>
</div>

<div className="fullHeight">
<p className="newsTitle">
<h2>Whispers of Winter War</h2>
<h4>November 19, 2020</h4>
</p>
<p className="news">
Following an ominous but surprisingly amicable autumn, the first winds of winter have exposed the 
shadows of War quickly approaching the precipice of Peace. Recent verbal disagreements between the nations 
have hinted at violence for the first time since the blood-soaked summer of 2020.
<br/>
<br/>
Junior Lieutenant the Caso, a well documented cheater, fired back at an accusation of foul play from General Johnson’s 
press secretary, triggering the war hungry nations to re-enter the arena. Threats of crimes of passion were immediately spewed by the Jr. Lieutenant, 
who has been recently cleared of murder charges following a questionably quick trial. 
Although the Blue nation has claimed to have held an impartial trial by jury, the details 
of the trial have been tightly concealed behind Blue walls, provoking suspicions of wrongdoing 
and abuse of power. General Serg, another suspect and alleged accomplice in the murder case, 
was swift in his attempt to de-escalate the situation between the Caso and 
General Johnson’s press team. General Serg has since fled the Blue nation, escaping his 
trial under diplomatic immunity, however the general's prompt and unfiltered response to the altercation could 
suggest continued allegiance to the Blue army and its corrupt leaders. Rumors of technological 
warfare have also resurfaced, as the true cause of General Dowals’ historic turn-miss over the summer has yet 
to be determined. As of this evening, no violence has been reported, however the unresolved conflicts 
between the nations seem to suggest an overabundance of shit inside the tender bowels of War.

</p>
</div>

<div className="fullHeight">
<p className="story">
<h4>November 21, 2020</h4>
<small>
There it was again. He knew what he had to do; he knew what he should do. But he just couldn’t do it. 
<i>&nbsp;I don’t deserve this,</i> he thought, staring in awe at the red, white, and blue hues of the magnificent parcel. 
<i>&nbsp;This treasure is for champions.</i> His gazing eyes settled on the ribbon at the edge of the box. 
A ribbon representing first place; the top. The winner. The best. A Blue ribbon. 
The Junior Lieutenant’s mind unwelcomely recalled the blue of his superior’s uniform, 
soaked in red from the action he had performed with a sawed-off shotgun in his hand. General Serg, in shock, by his side. 
A gruesome scene he had replayed in his mind incessantly since the incident. Every lie he told during the trial, 
every corrupt testimony from a loyal Blue soldier, every moment of deceit and scam - this scene would replay in his mind. 
He understood he was the very definition of a cheater; certainly unworthy of the ninety-nine Blue ribbon winners laying before him. 
The Jr. Lieutenant’s shame quickly morphed into anger as he sought to distribute the blame. 
<br/>
<br/>
Where had General Serg fled to after that unforgettable scene? Why had his only correspondence been a 
cryptic memo about hacking the Orange base in the name of Blue victory? Was he working with General Dowals now, 
in exchange for diplomatic immunity? Or perhaps just integrity? <i>The entire Blue organization is in shambles,</i> he thought. <i>Surely General 
  Serg has moved on to form other alliances.</i> His anger turned back to shame as part of an endless familiar cycle, and he slowly 
  walked away from the ninety-nine units of liquid gold. <i>I must prepare; victory on the 
    battlefield is my only option to reclaim the honor a Blue uniform once represented.</i>
    <br/>
    <br/>
If blood were currency, War would be rich.</small>
</p>

</div>

<div className="fullHeight">
<p className="newsTitle">
<h2>Nations Ban Together Against Blue</h2>
<h4>November 22, 2020</h4>
</p>
<p className="news">
Reports of chemical warfare involving General Daddison have resurfaced involving an incident in which a particular nation 
couldn’t seem to adhere to the agreed upon wartime. Witnesses claim the tardy General was seen accepting 
a vile from the Yellow army leader just moments before the botched attempt at timeliness. 
This is certainly not the first allegation of chemical warfare on General Daddison’s resumé, and the 
press will continue to investigate the matter. Perhaps a result of chemical warfare backfire, the Yellow 
army showed up in purple uniforms, prompting questions of collusion and even dice manipulation. No charges 
have been pressed at the time of this publication.
<br/>
<br/>
Meanwhile, Junior Lieutenant “the” Caso, fresh out of the courtroom as a free man, was prompt and 
eager to cast a shadow over the shameful events that had recently transpired across the Blue nation. 
Communicating over a secure Generals-only line, the Generals agreed to pull soldiers from the second 
battlefield, leaving the outranked Junior Lieutenant to unknowingly sacrifice Blue blood to mere outdated 
battle drones. The battle was officially called a draw, and although no winner was declared, there seemed to be an obvious loser.
<br/>
<br/>
The Junior Lieutenant’s hopes of redemption continued to fade as the nation’s leaders remained on the 
Generals-only comms channel for the final battle of the evening. The Generals unanimously agreed to 
wipe the Caso off the map, sending a clear message to the disgraced Blue nation. Unaware of his 
pre-determined fate, the Junior Lieutenant attributed his destruction to the “truly random” dice rolls, 
perhaps conspiring against him. General Johnson responded publicly with a savage memo, clearly declaring the nations’ 
intent, stating, “The dice don’t hate you, your friends do.”
</p>
<p className="story">
... 
<br/>
<br/>
<small>
“Fucking hell,” the Junior Lieutenant muttered, watching yet another General Dowals’ victory play out in front of him. 
The anger was back, this time fueling a deep hatred for the Orange-filled map. Anger turned back to despair, and just as 
the Junior Lieutenant was about to forfeit all hope and shit himself again, he heard a knock at the door. 
<br/>
<br/>
“I have ninety-nine PBRs and some information about the Orange army you may be interested in,” said General Serg.
<br/>
“The virus is back, baby.”
</small>
</p>
</div>

<div className="fullHeight">

<h2><b>December 4, 2020</b></h2>
<p>A Nor’Easter of rain and snow descended upon the battlefield as the chaos and 
  tension of a seemingly endless war, now officially entering winter, began to puncture the 
  souls of both Generals and troops, blurring the lines of victory and defeat. 
  Time, as they say, can be the mother of spirit; and time in war, quite the contrary. 
  It’s only a matter of  that time in which the turmoils of war begin to rear their ugly heads, 
  while the energy of the spirit is forced to the converse. In war, time can be hell; yet that 
  same time remains the last thing one can afford to lose.
  </p>
...
<p className="story">

<h2>A War of Passion</h2><h3><i>Part I</i></h3>
<small>
The night began as any other, with nations grabbing their respective corners of the map through 
blood and handshakes. Jr. Lt ‘the’ Caso, recently stunned by a devastating box cat mobile defeat, 
quickly found himself sandwiched between the north and south - a position that would ultimately define the evening. 
As Generals Johnson and Dowals formed a strong southern alliance, the vacillating Jr. Lieutenant remained 
fairly neutral; albeit following a handful of General Dowals’ orders to assist with border disputes against a 
growing Yellow army in the northeast. These small quarrels largely yielded stalemate until the silence was 
inevitably broken, providing the opportunity for all hell to break loose. The fuse of chaos was lit by some 
harsh words exchanged between General Daddison and General Dowals, foreshadowing the War of Passion that was 
about to materialize. General Dowals, in the name of passion itself, began to march north to defend his army 
against the words of General Daddison. A strong northern partnership between Generals Daddison and Kev fought 
back against the marching southern tyrant and his Jr Lieutenant minion, causing a tangential battle to break out 
between Blue and Red in the west. General Dowals’ propaganda attempts at first looked to persuade Jr. Lt ‘the’ Caso 
to join the fascist Orange regime for the foreseeable future, however the Orange army’s power and status 
blinded the General to the back door negotiations that were occurring between blue and red out west. In a 
pivotal turning point, the blue army, under orders of General Dowals, moved aggressively into General Daddison’s 
territory, planting a large army against an important red border, causing yet another territorial dispute in the north. 
Winds howled, blood spilled, and passions tensed, all while the imminent shitstorm of War awaited eagerly on the horizon.
<br/>
<br/>
</small>
...
<br/>
<br/>

<h2>A War of Passion</h2><h3><i>Part II</i></h3>
<small>
“I didn’t attack you!” the Jr Lieutenant roared over the public comms to the fuming Red army, who was upset about 
the recent shift in alliances that was occurring. The Jr. Lieutenant’s words and actions were not in alignment, 
as a formal Red/Blue agreement was broken while the Blue army brute-forced an aggressive amount of troops into a 
strategic territory for the Yellow/Red northern partnership. This event allowed General Dowals, under the pretense 
of fully securing the Caso’s allegiance, to formally declare war on the north, while General Kev continued his 
attempts at defusing growing tensions between the northern alliance and the historically irrational Blue leader. 
The stakes had never been higher to gain the Blue army’s support.
<br/>
<br/>
Following General Kev’s impassioned speech about the dangers of fascism, Jr. Lieutenant ‘the’ Caso 
reevaluated his position and quietly agreed to join the north’s pursuit against the southern dictatorship, 
in what was to become a major wartime turning point. Unbeknownst to General Dowals, General Kev now had the 
support of the Blue army and was able to launch a blitzkrieg on the south, landing a direct hit on one of the Orange 
army’s largest southern strongholds. Furious at the Jr. Lieutenant’s treasonous actions,  General Dowals removed his 
nutsack from his orange uniformed pants and proceeded to aggressively wipe his sweaty testicles all over the map, 
stirring a sea of passion and yelling unmatched by any previous moment in this shithell of a war. The eye of the storm 
had focused its glare.
<br/>
“I’m above the meridian!” the Jr. Lieutenant urged, suddenly facing several counts of treason within 
the walls of the Orange nation. Disgusted with the state of the warring nations, General Dowals made one 
last plea to his by-standing Green southern ally, to no avail. With few options left, the Orange army 
commander teared up the middle of the map, kamikazing into the Red territory of the northwest, with his 
perspiring ballsac openly swinging in the faces of his war-ravaged enemies.
<br/>
<br/>
As the dust of disarray settled, a note was recovered from a Blue army messenger 
found amongst the gruesome remains of the historic battle. The note read simply,
</small>
</p>
<p className="diarySerg">
Stir shit up, the Final Phase is upon us. 
<br/>
-The Virus
</p>
</div>

<div className="fullHeight">
<p className="narration">As the dissension carried over into a new year, the longing for an end to the War became 
increasingly palpable. Time began to divide itself into The Before and The After, with an unquantified middle still in flight.</p> 
<img src="/time.png" className="center"></img>

</div>

<div className="fullHeight">
 

<p className="newsTitle">
    <h2>Ol Patch Nukes Green Goliath</h2>
    <h4>January 3, 2021</h4>
    </p>

<p className="news">
In yet another night colored by passion and crimes, desperation drove General Daddison to an attempted 
raid of the Red army’s uniforms while simultaneously claiming “only a fool cares about the color he dons”. 
The failed operation led to General Kev pitying the winless piss-yellow army, offering the powerful red 
uniform to General Daddison if he could actually claim a victory. Spoiler alert: he didn’t. 
<br/>
<br/>
The eye of the battle quickly focused south, as a powerful Green army placed a colossal missile 
staring straight up the butthole of the eastern region of the map. General Dowals and General Kev made 
the strategic decision to ally against the Green threat, pledging to stage a joint attack for the benefit 
of all nations. General Daddison, who had spent the early battle launching petty attacks against the red 
uniforms he so desperately wanted, refused to join the alliance stating, “I won’t join your war but I will 
stop passioning your ass for now.”
<br/>
<br/>
The Orange army began the defensive attack with a powerful blow to Green from Japan. To the shock of the 
world, air support to the mission was provided by Ol General Patch who launched a surprise nuke directly at 
General Johnson’s reserves in the north, decimating the Green army’s chance at victory. 
“Remember the Ol General Patch!” the nations cheered at the uncharacteristic Purple move. 
General Kev, staying true to his word, offered the all but finishing blow to General Johnson, 
moving south in an effort to untangle the east and escape the passion war with General Daddison. The 
Green army struck back with bitter vengeance, clearing all Red army reserves from the north in lieu of 
rebuilding his fallen empire. As the Green ship sank pulling the Red army down with it, General Johnson 
turned his steaming glare to General Patch, as if to say, "The Johnson doesn’t forget.”
<br/>
<br/>
Following the altruistic takedown of the Green Goliath, the remaining nations fought for the renewed 
opportunity at victory. Albeit building an impressively sized army, General Daddison’s middle position 
proved too difficult to protect, eventually leaving a thin path for one of the strong coastal nations to 
march through. The initial attempt was made by General Dowals, a valiant, calculated effort held short of 
victory by just a single country. The void proved fruitful for General Patch, who launched his now unrivaled 
nukes over a war-torn land, claiming a much-needed victory. Experts say had it not been for his air support 
during the Battle of the Green Goliath, history would sing a different song. The Green army leader, when 
asked for a comment, condescendingly referred to this analysis as “counterfactual”.
<br/>
<br/>
The second battle of the evening proved to be a battle of grievances, as many tend to be. 
General Johnson followed through on his vows to eliminate the previously victorious Purple 
army via yet another kamikaze mission. Meanwhile, conspiracies over the Red/Orange alliances emerged, 
ultimately leading to Jr. Lieutenant “the” Caso clouding the comms channel with outright fables. 
General Daddison used the conspiracy theories to continue his war of passion against 
the red uniform he so desired. With the Yellow and Red armies unable to reach an agreement, the two 
armies slowly chipped away at each other, giving General Dowals the opportunity to quietly rebuild his 
army in the south, while claiming publicly, “I am willing to die for you, General Kev.” Claims of 
surrender didn’t fool anyone, however the Blue units were not strong enough to hold General Dowals off and 
the Orange army eventually marched through the bloody north, to victory. 
<br/>
<br/>
After a suspiciously quiet night from Jr. Lieutenant the Caso, the press has intercepted a 
correspondence from the Blue army headquarters, as it was accidentally addressed to <i>'Cyrus the V-brb I just shat myself'. </i>
 The letter will be published, unaltered, to serve as a public service announcement warning of a dangerous, 
 potentially psychotic Jr Lieutenant, currently a fugitive under international law.
 </p>
<p className="diaryCaso">
Dear General Serg,
<br/>
<br/>
It’s been a few moon cycles since we last spoke, and it seems the war has truly shattered us all. I assume you’re out there, lurking in the shadows, silently building strength; but the Blue army could really use an ally such as yourself in these trying times. War has made monsters of all its proprietors.
<br/>
<br/>
This evening, as conspirators perpetuated ideas that only gain momentum through popularity of opinion, I was so disillusioned that I started completely making up stories about General Kev stabbing General Dowals in the back. When the chaos and insanity begin to normalize - that’s when you know you’ve reached the inner circles of the hell of war.
<br/>
<br/>
They say the end is near; that there’s a cure to this devastation on the horizon. I’m just not sure we can take much more of this madness. And although we have no choice but to fight the war, it is clear both soldiers and leaders alike are growing more and more longing for the times of before; if those times can ever even be again. 
<br/>
<br/>
While the other nations fight their own battles, all I ever desired was to obtain the General’s title. All the crimes, passion, and murder will have been for nothing if we don’t succeed in that goal. Once I become General of the Blue army, I promise you diplomacy and the highest Blue honor - which comes with perks beyond your wildest dreams. I just ask for your immediate assistance, as my only chance at achieving the rank I deserve is to bring home an uncontested Blue victory. The nations are weak, General Serg. It is time for us to strike. 
<br/>
<br/>
Warmest regards,
<br/>
Jr. Lieutenant the Caso
<br/>
<br/>
</p>
<p className="news"><i>Editor’s note: Traces of human feces were found on both the letter and the envelope. All materials will be sent to the lab for further testing. 
</i>
  </p>
</div>
<div className="fullHeight">
<p>To be continued..<a href="https://imgur.com/a/IXWxmJW">.</a></p>
</div>
 </div>
  )
}
