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

        The year was A.D. 2020. Most great thinkers of earth had sensed unrest brewing for 
        quite some time, but very few were prepared for the events that actually transpired. Sickness, 
        suffering, and death were just the tip of the iceberg as an already unstable human race was 
        ravaged by plague, cultural divergence, and warfare.

        <br/> <br/> What follows is a collection of diary entries, news articles, 
        letters, and other miscellaneous artifacts from a group of fairly insignificant dudes, 
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
        <h2>April 19, 2020</h2>
   
      The agitation amongst the dudes has lead to a few seemingly harmless battles to air some petty grievances. 
      Tonight I ran outta time just as I was hitting the fortify button - an infuriating mistake to say the least. 
      Bruised, but not defeated from the bloody Caso-Johnson debacle, General Johnson's Green army perforated the open gap and wreaked havoc on the southern region of 
      the divided United States. 
      The fight continued in Canada but it was not enough to take down the almighty Johnson. With a damaged south and a once cololorful map 
      now only patched with red, General Johnson was able to pull out of the south, scatter soldiers up north, and claim victory once again.

      Johnson's patient strategy has proven quite difficult to defeat. Tonight's battle is over, but the scars will remain. 
    
      </p>
     
      <p className="diary">
      <img src='/xo.png' height="200px"></img>
      
      &nbsp;&nbsp;   &nbsp;&nbsp;    ^ the Johnson finding holes
      </p>
      </div>

      <div className="fullHeight">
        <p className="narration"><small>
          <h2>HUDDLE CORRESPONDENCE 4/20/20</h2>
          JL THE CASO: WAS THAT A 2.5 HR GAME?
          <br/>
          <br/>
          GEN KEV: PSA - DON'T TRUST CASO
          {/* <br/>
          <br/>
          GEN KEV: I DEF SHOULDA MADE A DEAL WITH YOU RAD TO GET ONE OF YOUR COUNTRIES FOR A CARD IN EXCHANGE FOR CHARGING PACH. I HAD 2 SO THAT WOULDA GIVEN ME 10 TROOPS AND THE ADVANTAGE
          <br/>
          <br/>
          GEN KEV: I WAS TOO DISTRAUGHT FROM THE FALLOUT OF OUR ALLIANCE BREAK EARLIER. I THINK CASO WOULDA WON THEN THO */}
          <br/>
          <br/>
          GEN JOHNSON: I HAD RISK DREAMS LAST NIGHT
          <br/>
          <br/>
          GEN SERG: RISK DREAMS TOO. AND CASO DISTINCTLY COMPLAINED ABOUT THE DICE BEING WEIGHTED IN IT
          <br/>
          <br/>
          GEN DADDISON: HAPPY 4/20
          <br/>
          <br/>
          GEN DADDISON: THAT MAP REQUIRES SPECIFIC AND BRIEF ALLIANCES
          <br/>
          <br/>
          JL THE CASO: HAD TO SQUASH KEV SINCE HE WASN'T ATTACKING RAD. JUST BEING A BIG BEE'S NEST SMACK DAB IN THE MIDDLE OF THE MAP
          <br/>
          <br/>
          
          GEN KEV: GOTTA BE A COASTIE, THAT MIDDLE AREA IS FUCKED
          <br/>
          <br/>
          GEN KEV: I TURNED ON RAD BECAUSE HE WOULDN'T MAKE A DEAL AND THEN HE TURNED INTO THE HULK
          <br/>
          <br/>
          JL THE CASO: THE BETRAYAL OF KEV WAS ONLY POSSIBLE DUE TO THE BOND I FORGED WITH PACH IN THE PREVIOUS GAME
          <br/>
          <br/>
          GEN PATCH: I'M STILL RIDING THIS HIGH. YOU HAVE TO PROVE YOURSELF AS A VP TO TAKE THE TOP SPOT IN THE LONG RUN. CAN'T BE PISSING ALL OVER YOUR GOOD NAME OUT THERE 
          <br/>
          <br/>
          GEN PATCH: PEOPLE NEVER FORGET 
          <br/>
          <br/>
          GEN SERG: CHAOS IS THE ONLY CONSTANT
          <br/>
          <br/>
          END OF CORRESPONDENCE

          </small></p>

      </div>

      <div className="fullHeight">
      <p className="narration">Following a weekend of minor quarrels, the hints of pandemonium seemed to deflate almost as 
      quickly as they had distended*. A temporary ceasefire was agreed upon, and peace talks were underway in an effort
      to prevent large-scale warfare. 
      <br/>
      <br/>
      </p>
 
      </div>

<div className="fullHeight">
   <p className="newsTitle">
<h2>After Abrupt End to Ceasefire, Johnson's Reign In Doubt</h2>
<h4>May 3, 2020</h4>
</p>
<p className="news">
The ceasefire proved costly for General Johnson’s troops, 
as the undefeated veteran collapsed to two previously 
winless armies in yet another bloody Saturday night. 
General Dowals, new on the scene of war, quickly rose 
through the ranks by wiping Deutschland clean of the 
Almighty Johnson’s post-ceasefire army. While Johnson 
gathers his battered troops to mansplain the follies of hubris, 
Jr. Lieutenant the Caso, humiliated to be the last war-torn nation without a victory, 
scolds his soldiers and quietly plots his revenge.
        </p>
      </div>

      <div className="fullHeight">
        <p className="narration"><small>
          <h2>HUDDLE CORRESPONDENCE 5/3/20</h2>
          GEN DOWALS: JR LT CASO SHOULD HAVE SHAKEN THE HAND THAT ULTIMATELY LED TO HIS DEMISE
          <br/>
          <br/>
          GEN KEV: A COSTLY BETRAYAL
          <br/>
          <br/>
          GEN PATCH: GENERAL DOWALS IS A NEW PLAYER ON THE FIELD THAT DEMANDS RESPECT. HE WAS IGNORED AS WEAK AND INEXPERIENCED - NEVER AGAIN
          <br/>
          <br/>
          GEN DOWALS: EVEN CALLED 'A MERE LIEUTENANT' TO SOME.
          <br/>
          <br/>
          GEN DOWALS: WHEN THE STARS OF A TRUE GENERAL GLIMMERED BRIGHTLY OVER THE GERMAN STATE
          <br/>
          <br/>
          GEN DADDISON: ANYONE KNOW WHERE I COULD BUY A LUXURY TEE WITH A PICTURE OF THE RED ARMY GENERAL'S HEAD ON IT
          <br/>
          <br/>
          END OF CORRESPONDENCE
             </small>
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
  Blue army, now appearing purple from the blood soaked uniforms, and quietly tells them to go home and 'thank 
  your mothahs'.
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
  Junior Lieutenant 'the' Caso claimed his first victory of the war last night, although rumors of chemical 
    warfare involving the Yellow army could prove diminishing to the win. “I felt loopy, I certainly wasn’t myself,” General Daddison stated to 
    reporters when asked why he didn’t use his cards at a crucial battle moment. “I guess it coulda been the anchovies,” 
    he added, apprehensively. In response to the allegations, Lieutenant the Caso began to describe an awkward dream he 
    had about the Yellow army’s commander, followed by some patronizing advice to the seasoned General. The topics of 
    chemical warfare and anchovies were suspiciously avoided. Officials are currently voting on whether or not to asterisk the battle.
  <br/>
  <br/>
  The only other leader willing to comment on the developing 
    controversy was General Dowals, simply stating, “fucking pussies”. </p>
  </div>


<div className="fullHeight">
<p className="story"><small>June 7, 2020</small>
<h2>The Shushing</h2>
</p>
<p>Chaos and crimes of passion overshadowed any hope for actual strategy, as verbal conflict blended with 
senseless violence to fuel the cycle of incessant devastation.</p> 

...

<p className="story"><small>The pale echoes of peace were swiftly silenced as Junior Lieutenant 
the Caso dropped his curry dinner, allegedly distracted by the sirenesque 
sounds of General Dowals’ mistress. Filled with shame, the Junior Lieutenant 
cracked a can of watery tuna and heeded the calls of war to fill the painful void. 
The <i>'drop heard round the world'</i> proved unfortunate for the Red army, who shared a border 
with the humiliated Junior Lieutenant looking to unleash his anger on a nearest neighbor. A battle of 
passion broke out, resulting in a depleted Red army with no option but to beg for an alliance with 
General Dowals in the north. Desperate for companionship in wartime, the General accepted the offer 
and the Orange-Red army marched to destroy any hopeless soldiers in its path. Unable to band together 
against the allied Titan, the nations resorted to blame, slander, and yelling as they fell pitifully to Orange, all 
while General Daddison repeatedly cried out "SHHHH SHHHH SHHHH SHHHH SHHHH" over the public comms channel, directed at
the leader of the Red army. 
<br/>
<br/>
Perhaps out of both air and energy, the yelling calmed in Africa as the nations all turned against Orange, 
leaving an opening for a win-starved Purple army to deploy a fresh strategy. The decision to not camp in a 
single country proved fruitful for Ol General Patch, as he was able to pull off an unprecedented pivot-play and bleed through the war-torn 
nations for a much needed Purple victory.
<br/>
<br/>
The battle turned to the grounds of the Roman Empire where the generals, 
seemingly unable to learn from the past, began to repeat history (again). The 
coastal quarrels quickly boiled over, leaving room for the armies inland to grow and plot. 
With a valiant effort to break the infinite loops of the days of old, the Red army marched with 
hope and passion, only to fall by the limits of their own weaponry. With the privilege of superior 
funding and technology, General Johnson crushed the hope of the passionate Red army (and 
perhaps the world), allowing a blood-colored history to once again, repeat itself.</small></p>

</div>

<div className="fullHeight">
<p className="diaryDowals"><small>
<h4>Private Diary of General Dowals - Keep Out!</h4>
  <h2>June 14, 2020</h2>
  <h2>"The Battle of Dick Hill"</h2>
  Another interesting map lay in the second War of the eve. LT Caso still brimming with anger 
  and spewing hate in all directions, General Dowals and Patch sat for a vast period of time due to 
  “hey let’s ally - oh wait I want to go that way - I assumed that since we allied you would just know 
  what I wanted and do what is best for me.....well F that noise..... oh hold on a sec, we both lost.....” 
  General Rad, Johnson, and Kev were generally forgettable in the first game (I 
  lost so early I don’t care what happened - bullshit rolls)
<br/>
<br/>
To a new war. Immediately the tactic was set by General Kev asking the typical 
“hey Stevie, what are you doing down there, I have no issues with you.....just leave because I want the country.” 
General Johnson's approach was forced by the lands of the Middle East, General Patch laid claim you the 
north west establishment creating a barrier with the red/ yellow armies. Now this is the time the dicks starting flying. 
Lt Caso, still fuming, found a friend in a fellow loser General who couldn’t decide wether whisky or beer was the 
right choice. Very similar to the “shit, I had cards?” Incident or the “fuck, didn’t want to fortify there....whoops” 
debacle. Sitting pretty in Dicks-Ville, Lt Caso / General Rad formed a stronghold in the north/north east. 
This shows the map as is the first 3 years of war.
<br/>
<br/>
Moves were subtle, no one looking to whip it out to show the world. A lot of tit for tat. 
One cute little move was when Lt Caso took his troops outside of a few countries to let 
General Rad go fight others for him - it was adorable. Some words were spoken, which 
forced General Kev to establish dominance and lay his lumber into Turkey to cut up the homo-erotic 
love fest of Rad and Caso. Lt Caso was not a fan and his strength in numbers, which showed when he took 
back his lands gave General Rad his home again..... the bond was sealed. Having no path way out 
General Dowals was stuck with a fat stack of troops in the south, and by the time the Country was 
established by a bloody battle to end General Kev's rein, his forces were weakened......
<br/>
<br/>
Observing this fact, Lt Caso took advantage of General Johnson’s long hold of a 
centralized country and sliced the domain into the southern tier of General Dowals. 
There was no reinforcements. Graciously, in the massive fog of dicks in the north, Lt Caso allowed 
General Rad to remain living to use his cards ....... the whiskey took hold...... 
cards weren’t used and his troops riddled.....
<br/>
<br/>
With only one shot of claiming strength back, General Dowals slapped General Rad taking his 
pathetic cards only to leave himself more vulnerable....... we can all see the story from here....
<br/>
<br/>
Lt Caso pushes his massive troops that was collected with zero resistance into squabbling the 
territories marking victory on the lands.
<br/>
<br/>
The Battle was named: <i>The Battle of Dick Hill</i>
<br/>
The excited Lt scurried back to his superiors. Feeling positive about the win at
Dick Hill and his crimes of passion seemed to be under control. This little Lt was jazzed. 
  </small>
  </p>
</div>

<div className="fullHeight">
  <p> The Gordian knot of military bureaucracy just wasn’t worth fighting today. </p>

<p className="story">
<small>Energized by a recent win and fed up with the constant ridicule from his peers, Jr. Lieutenant the Caso reluctantly finished his mound of paperwork, 
anxious to finally order the ‘General the Caso’ nameplate to display prominently on his desk. <i>I’ll probably order the 
silver - to match the Live, Laugh, Love sign,</i> he pondered as he knocked on his superior’s door.
<br/>
<br/>
“Come in,” the staunch old man ordered, clearly aggravated by the Jr. Lieutenant’s interruption and disheveled appearance. 
“Back again for the promotion plea I see?” The Jr. Lieutenant held back his loathe for the expendable old man. 
<br/>
<br/>
“Yes, sir,” the Caso said. “I’ve got everything you asked for this time.” 
He handed the neatly stacked, laminated documents to the systemic man and pretended to respect the outdated procedures. 
“It’s all there, sir. May I have the title now?”
<br/>
<br/>
“Not yet, Lieutenant,” the man sneered as he stood to face the Caso. 
“Put your goddamn crimes of passion to rest and secure a real win tonight. 
Then, if you’re lucky, I might consider your request, <i>Junior Lieutenant</i>.” The Caso idly saluted and stomped back to his office to prepare a 
battle plan. He sighed as he noticed a new scratch on the <i>Jr. Lieutenant</i> nameplate, sitting sluggishly on his desk.
<br/>
<br/>
<img src="/stars.png" className="center-small"></img>
<br/>
<br/>
Back out on the battlefield the soldiers were tired and the violence seemed infinite. Unknowingly fighting for little more than a broken man’s new nameplate, 
the Blue army obeyed their orders and listened to the Jr. Lieutenant’s passionately mediocre speech. “You only live once, so go fight for it!” concluded the 
sermon with a lackluster ‘hoo-rah’ as the army’s response. The soldiers knew not what they were fighting for, 
but nonetheless blindly adhered to the lines of command. “It is what it is,” a veteran soldier whispered to a questioning young recruit 
as they watched the Jr. Lieutenant prepare the artillery for another inevitable battle.
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
In a pitiful display of desperation, Jr. Lieutenant 'the' Caso utilized despicable war tactics such as 
inciting chaos, camping, shielding, tear gassing civilians, and attacking without formally breaking alliances to 
steal a dissatisfying win from the warring nations. Officials are left questioning the legitimacy of the 
Blue nation and are considering pulling global funding from the deplorable boys in blue. Even war has its 
limits, and the Blue army has incessantly shown it will act without shame, continuing to cross lines to 
maintain status as an admissible organization. Any respect the nation once held is certainly dwindling, if not already nonexistent. 
The nations of the world will be holding several meetings over the course of the next few months to determine 
the fate of the Blue army and its questionable constituents.
</p>
</div>

<div className="fullHeight">
<p className="diaryDowals"><small>
<h4>Private Diary of General Dowals - Keep Out!</h4>
  <h2>June 21, 2020</h2>

Tensions were high pre-war. Jr. LT Caso was spitting the utmost heat and Cholua sauce only to get smacked in the face via Rocket League..... but we can discuss that impotence later...... to the war
<br/>
<br/>
An interesting yet spacious map. Enough for “everyone can have an island - why do you want to come after me” (Gen Johnson). After initial establishments - the back and forth of “who was strongest” leading to skirmishes that held each power house back. The first to get smacked, was General Stevie despite having an alliance with Jr. Lt Caso - “as soon as I got a good roll it was time to take you out”. Also said was - “I have to get to Kev - he has 20 troops less than everyone else, doesn’t have a Country, so I had to go through you.” No one on the map understood the move, but it did work in his favor by collecting the cards. Shows the true random effect beautifully doesn’t it?
<br/>
<br/>
After that confusion - it seems as though the areas were distraught and all fighting was occurring because “Kev has the north, he will win” while Johnson stayed in place and built ...... slowly. 
<br/>
<br/>
A pivotal point in the war came when General Pach took a huge shit in the boat to the north rendering Gen Kevs country immobile. The dump was so big, it almost sunk the ship. The Red Army was sure to win but all hopes was slashed for the onslaught. 
<br/>
<br/>
As Jr Lt Caso and Gen Johnson played tiddly winks in the south (taking some troops here an there) allowing Gen Johnson to continue to amass his troops there was a limit to The green army’s success. General Pach aware of his impending doom pulled a Chess Castle type maneuver shifting the nature of his troops to the south East portion of the map all while retaining General Johnson back to keep troops at bay. While all this was occurring, each of the generals needed to examine the space and recalculate. It was said Jr Lt Caso was playing with his Batman action figure at this time......
<br/>
<br/>
While there could be arguments of the moves made by the Generals (and Jr Lts - not naming names) could have been “bad” or just “bad luck maybe” or even crazy but had logical sense. The move that was at the top of the list was the completely outrageous punch to the Red Army but the Junior led Blue Army. Correspondence from the field described a massive confusion by all. 
<br/>
<br/>
“Lt Caso - what is the point of this? The Green Army will surely destroy us - why” 
<br/>
“Listen to my orders - I have tactical prowess” screamed the Jr Lt. 
<br/>
“But sir - the logic is not sound” said a Captain
<br/>
“Logic is a word I use when I’m buying a house - this is war” Jr Lt Caso
<br/>
“Sir, that doesn’t make sense” 
<br/>
The Jr Lt simply said “well chocolate bars Captain - that is my answer to that. I have spoken” 
<br/>
<br/>
Confused and a little bothered - the Captain followed through with the attack.
<br/>
Literally the next turn - cards were turned in troops were set - the Green Army started its run - territory’s destroyed one by one, 52% ......... 56% .........68%
<br/>
A blunder..... General Johnson was one short on a costly redeployment move....
<br/>
Jr Lt Caso had already packed his bags and was going home until luckily the Captain that did not give up on the war drove 150 miles In a Jeep to get his “superior” and tell him the Green Army Failed. 
<br/>
“Oh really!!! woweeee - my tactics DID work” exclaimed the Jr Lt.
<br/>
Scurrying back - all the Junior needed to do was to sweep up the garbage and put a bow on it. A task an ensign could do.  
<br/>
<br/>
A win is truly a win in all accounts - however to gloat of tactics when playing with action figures during a shift in the battle field is just deplorable. Thank god for that Captain - he was promoted to LT but just to save face with the troops - the top superior might offer Lt Caso his “Sr” title again. He also got him the Joker and the Penguin to match his set......
</small>
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
<br/>
“In all my years, I have never seen such poppycock. Camping at the fucking pier? Attacking the north for no reason? 
And now every headline is calling you the new virus in town? Your bullshit ‘win’ off the coattails of General Johnson’s 
prudent strategy is a PR catastrophe. I’m sure you’re now aware of the calls for a full Blue systemic reform? The boys 
in blue were sitting pretty, Caso. For centuries. Nobody questioned our authority. Our funding had been skyrocketing. 
Why would we change policies that kept us on top for hundreds of years? We <i>just</i> got finished convincing the public we 
have an immigration problem to throw more military dollars at - and now, this. A god damn calamity, Caso. With your face 
on the poster.”
<br/>
<br/>
The superior officer collapsed into his chair, too fat and exhausted to fully comprehend the mess Caso had left in his wake. 
An unpleasant moment of silence hovered ominously in the office before the old superior spoke again. 
<br/>
<br/>
“I hear the original virus is beefing up on breakfast burritos and on the hunt for a new color. If we don’t wipe the 
papers clean of this disaster immediately, we just might have an opening on Blue’s leadership team. And if the word 
‘defund’ crosses my desk one more time, you can kiss any chance at a promotion in a blue uniform goodbye, <i>for life</i>." The superior suspired.
<br/>
<br/>
"Get out of my office, it smells like you defecated yourself.”
<br/>
<br/>
Caso, shocked at his superior’s analysis of his tiresome win, paused before he made his next move.
“A win’s a win though, right, sir?”
<br/>
<br/>
“GET OUT!” the superior roared, finally gazing directly into the Caso’s eyes. 
The Junior Lieutenant turned and scampered out, suddenly aware that he had, in fact, shit himself.
</small>
</p>
</div>



<div className="fullHeight">
  <p className="narration">
  With no end in sight, many took escape to the wilderness
   to seek solace from the isolation and communal devastation. Nature is left once all else is distilled.
  </p>
  <img src="/mountains.png" className="center"></img>
</div>

<div className="fullHeight">
  <p className="story">
    <h3>June 29, 2020</h3>
<small>
“That squirrelly Lieutenant is becoming my biggest regret. What are my options?” The old Blue superior 
barked, almost relieved by the news of his Junior Lieutenant’s sudden disappearance. 
<br/>
<br/>
“Desertion carries a maximum punishment of dishonorable discharge, forfeiture of all 
tokens, and confinement of up to five weeks, sir.” 
<br/>
<br/>

“Fine, find him and lock him up.” 
<br/>
<br/>

“Well sir, for desertion during a time of war, the <i>ultimate punishment</i> may be applied...”
<br/>
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
individualism was posed to destroy a conceptual ideal perhaps perpetually doomed before the ink had dried. 
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
A virus might just be the chaos we need to distract the public and clear our record. 
Keep it up out there, 
General Serg. If you succeed, we may again one day enjoy the privilege of invincibility the blue uniform once stood for. 
Stir the bullshit up, but do so under the radar. We don’t need another pants-shitter steering this ship.”
<br/>
<br/>

“Yes, sir,” General Serg replied.
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
firmly holding a sawed off double-barreled shotgun directly at his superior’s dilapidated heart. 
“It would be in your best interest to sign this.” 
<br/>

<br/>The superior officer showed no emotion, exhausted from the tumultuous months of his recent past. He took a quick glance at the contract held by General Serg and looked back toward the barrels of the gun. 

“Over my dead, shitless-pantsed, body.”
<br/>
<br/>

“Very well then, sir.”
<br/>
<br/>

And with the simple motion of a contracting finger, blood was dispersed on a night of proposed peace, as a Junior Lieutenant instantaneously acquired newfound power. 
</small>
  </p>
  <img src='/shells.png' className="center"></img>
</div>

<div className="fullHeight">
  <p className="story">
<small>
Blood-soaked and traumatized from the gruesome event carried out by Lieutenant 'the' Caso, General Serg grabbed a 
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
    It tends to be darkest before the dawn, they say.
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
Meanwhile, Junior Lieutenant 'the' Caso, fresh out of the courtroom as a free man, was prompt and 
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
<p className="diaryDowals">
Stir shit up, the Final Phase is upon us. 
<br/>
-The Virus
</p>
</div>

<div className="fullHeight">
<p className="narration">As the dissension carried into a new year, the longing for an end to the War became 
increasingly palpable. Time had begun to divide itself into The Before and The After, with an unquantified middle still in flight.</p> 
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
nukes over a war-torn land, claiming victory. Experts say had it not been for his air support 
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
After a suspiciously quiet night from Jr. Lieutenant 'the' Caso, officials have intercepted a 
correspondence from the Blue army headquarters, as it was accidentally addressed to <i>'Cyrus the V-brb I just shat myself'. </i>
 The letter will be published, unaltered, to serve as a public service announcement warning of a dangerous, 
 potentially psychotic Jr Lieutenant, currently a fugitive under international law.
 </p>
<p className="diaryCaso">
Dear General Serg,
<br/>
<br/>
It’s been a few moon cycles since we last spoke, and it seems the war has truly shattered us all. I know you’re out there lurking in the shadows, silently building strength; but the Blue army could really use an ally such as yourself in these trying times. War has made monsters of all its proprietors.
<br/>
<br/>
This evening, as conspirators perpetuated ideas which only gain momentum through popularity of opinion, I was so disillusioned that I started completely making up false stories about General Kev stabbing General Dowals in the back. When the chaos and insanity begin to normalize - that’s when you know you’ve reached the inner circles of the hell of war.
<br/>
<br/>
They say the end is near; that there’s a cure to this devastation on the horizon. I’m just not sure we can take much more of this madness. And although we have no choice but to fight the war, it is clear both soldiers and leaders alike are growing more and more longing for the times of before; if those times can ever even be again. 
<br/>
<br/>
While the other nations fight their own battles, all I ever desired was to obtain the General’s title. All the crimes, passion, deceit, and murder will have been for nothing if we don’t succeed in that goal. Once I become General of the Blue army, I promise you a pardon and the highest Blue honor - which comes with perks beyond your wildest dreams. I just ask for your immediate assistance, as my only chance at achieving the rank I deserve is to bring home an uncontested Blue victory. The nations are weak, General Serg. It is time for us to strike. 
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
<p className="newsTitle">
<h2>Public Comms Dispute Results in Victory for Daddison and Ol Patch </h2>
<h4>January 18, 2020</h4>
</p>

<p className="news">
In a rare four man scrimmage yesterday evening, the Generals decided to send a message to Ol General Patch that in 
order to participate in worthy battle, it’s way more fun if everyone acts with transparency and joins the public comms channel. 
General Daddison, beyond desperate for a win, chose to take advantage of the situation by breaking with 
the coalition and opening an encrypted private backend channel with General Patch. By allying and communicating offline, the Yellow army was able to 
snake a questionable victory, currently under official review for an asterisk. Analysts presume the unscrupulous strategy was an effort to gain endgame experience for use in real battle. The private comms 
channel is now known as ’69chan’ and is also under investigation by officials.
General Daddison denied commenting on the developing controversy, reportedly telling the press to “eat my butt”. 
<br/>
<br/>
The following battle began with General Patch again refusing to join the comms, 
even after receiving a written petition to do so. Unable to set his moral compass straight 
and join the Green/Red Coalition for Transparency in War, General Daddison continued to utlize the underground 
media channels while simultaneously sabotaging the public comms. The Yellow army commander was eventually able to 
successfully anger General Johnson enough to sacrifice Green 
troops to what historians are referring to as a 'boring version of the Cuban missile crisis'. The calamity allowed Ol General Patch 
to clean up the unnecessary mess and take the second scrimmage victory of the evening. The press, 
most profitable from stories involving interesting drama and controversy, eagerly awaits a battle where the Generals have the opportunity to publicly yell, 
face to face (over the internet). 
</p>
</div>



<div className="fullHeight">
  <p className="narration">
    A transfer of power casted a brief moment of tension release, yet the chaos cleanup ahead seemed nearly impossible. 
    Hints of a new hope, however, were back in the air.
  </p>
  <img src="/rainbow.png" className="centered"></img>
</div>

<div className="fullHeight">
  <p className="narration-quote">
    <h2>Supreme Commander J.R. Biden Jr.</h2>
    <h3>January 20, 2021</h3>
  <small>
    "We can see each other not as adversaries but as neighbors.  We can treat each other with dignity and respect. We can join forces, stop the shouting and lower the temperature. For without unity there is no peace, only 
    bitterness and fury. No progress, only exhausting outrage. No nation, only state of chaos."
    <br/>
    <br/>
    "Every disagreement doesn't have to be a cause for total war."
    </small>
    </p>
</div>

<div className="fullHeight">

<p className="diaryDowals"><small>

  
  <h2>"The Battle of the Great Wall of Bullshit"</h2>
  <h3>As written from the Private Diary of General Dowals (Or Gen. Stevie - interchangable)</h3>

  <h2>February 6, 2020</h2>
  After a pleasant journey though the sacred walls of the Tomb of Forgotten Wars, the Generals (and LTs. alike*) gather back to begin a new year of strategy, battle, and good
ole fashioned tomfoolery. Within the DMZ zone of "HP", tales of victory and failure rused up sleeping tensions like a bear being prodded during his slumber in which he didnt
have his fill of meats prior to hibernation....
<br/>
<br/>
Gen. Dowals: "Hey, dont we just play for fun and friendship/comradery?"
<br/>
<br/>
Gen. Daddison (Or Gen. Rad): "No...We play to Win."
<br/>
<br/>
And so the battle begins...
<br/>
<br/>
It should be noted in the records that General Ceej / Lt Caso missed the first bus out of the DMZ zone..... Pre-War jitters I guess.   
<br/>
<br/>
Finally when all the Generals (and LT) reached the battle front, the map displayed several locations of strategic strength, the difficulty was landing these locations with
5 Generals / 1 LT all sniffing for the best one. Within my records, I established an early dominance in which many of the other generals did not see in the clear of day.
A quick push into Gen. Daddison's early country was led with and immediate ask for alliance from Gen. Ceej / Gen. Kev simultaneously. Always line up with strength, and I
cannot refute that.
<br/>
<br/>
Countries began to be established by the leaders and the discussion of the Great Wall of Bullshit was at hand.....Apparently, the statistics of attacking over the wall favored
the defence. Makes sense. Percentages of victory were shown to the Generals to understand the amount of "Risk" that would be taken via each battle. A standard item in a
Generals tool box. Apparently the Lt. did not see or know about this when his leadership was taken via a coup/murder. Would have been nice to be trained of that feature. Sad
and confused of not knowing this basic fact - the Lt. lashed out at me, claiming it was "an advantage". As a General, I accepted the tantrum and continued to strategize
and take notes.
<br/>
<br/>
Maybe all hopped up on "percentage based combat", Lt Caso made the first significant move of the night.
<br/>
<br/>
Lt. Caso: "Its nothing personal" as he took a greasy shit in Gen. Kev's living room.
<br/>
<br/>
Gen Kev: "What the fuck are you talking about - that is personal! asdfhuhiwuehihacieaoieuohfoiahiu (unintelligible ramblings)"
<br/>
<br/>
On the northern portion of the Map - Gen. Daddison amassed a large troop on an island on the other side of his home County to prevent Gen. Pach from claiming stake to his land
A fued of Gen. Pach / Daddison ensude with massive losses of troops and mean rolls. A drop of whiskey is within my notes of who won this quarrel.... drinking/notes/war are a
bad combo. Lets just say no one was happy about that.
<br/>
<br/>
As always, we reach the point in the Battle where Gen. Kev makes his standard announcement.
<br/>
<br/>
Gen. Kev: "Well, someone needs to break an alliance." (This is strictly observational and not financial advice)
<br/>
<br/>
At this time, General Daddison felt the need to point out that he has "big balls". Kinda random, a little bold. A few attacks to countries and all of a sudden the sack
between the legs is a pair of 18 lb bowling balls. During this discussion of ball size, Gen Daddison/Lt Caso were coaxing Gen Kev to attack others than themselves. General Kev
in the middle between 3 Generals and a LT had to make a coice. With Gen Ceej and his nukes at his back door, myself with a wall of defense, Lt Caso's needle pokes, and Gen
Daddison with a set a balls...... Something had to be done.
<br/>
<br/>
The choice was made to make war with the Lt. - he had shown to be the weakest at the time. Heavy back and forth, General Daddison supported the Lt. with his quarrel.
<br/>
<br/>
During the battle - the Record was requested to state that - Gen. Kev should have attached Gen Daddison.....and so it shall.
<br/>
<br/>
After whining and claiming alliances were cheap, attacks from my army that were not real, Gen. Kev being an idiot, and several other notes that you can read in his
diary. Mostly whining about the strong Orange Flag..... the Lt made a swift exit. The Red Army proved to be too strong for the Blue Armys false threats. It will be noted
that the Lt. was able to get view mode which allowed additioal ramblings while watching the battle unfold from the DMZ area. Records for this diary should be reviewed
strongly by the Generals since they are:
<br/>
<br/>
1. Written by an LT
2. Written while not in the game
3. Complaints are not a record of War.
<br/>
<br/>
Shortly after the Lt. defeat, Gen. Pach swept in for the kill to take Gen. Daddison from the map all while stifiling the defenses of Gen. Dowals. The chess pieces were
placed. (Echos of the dead were heard at this time "Pach, go for Orange! Go for Orange". The sounds whistfully disappeared in the wind.)
<br/>
<br/>
At this time in the War a stale-mate was placed. Gen. Kev/Ceej/Dowals/Pach holding quarter. Gen Ceej / Pach had the most amassed troops sitting with anywhere between 25 - 40
on two separte countries. Against every statement made in Lt. Casos diary - myself / Gen. Kev remove the alliance and being to fight. At this point I remember getting hit
General Ceej and Gen Pach which left me at a point of defense and attempting to rebuild. There was no path to victory for myself nor Gen. Kev. A highly debated topic of Gen.
Ceejs lack of push was into play when Gen. Pach being more decisive made the strong push and narrowly claimed the map within seconds of the turn ending.
<br/>
<br/>
A truly bloody battle in which "should have" or "could haves" were on the table. A glorious win for Gen. Pach and the Purple Army.
<br/>
<br/>
Gen. Daddison: "Can we play another small one?"
<br/>
<br/>
Gen. Dowals: "Yea, I guess we can play a small one."
<br/>
<br/>
Gen. Daddison: "Fuck You."

  </small>
</p>

</div>

<div className="fullHeight">
  <p className="narration"><small><i>Public Interest Notice: The following text was written by a reportedly unstable Junior Lieutenant, currently under investigation for 
 several nefarious war crimes.</i></small></p>
 <br/>
 <br/>
  <p className="caso">
  <small>
      <h2>Battle of the Great Wall of Bullshit</h2>

<h3>Prelude</h3>
<h3>0430 Saturday, 6 February 2021</h3>
<h3>Location: Red Army General’s Sleeping Quarters</h3>

The Red General tossed and turned, suddenly awakened by a searing pain in his abdomen.
<br/>
<br/>

“That week old calzone must have given me food poisoning.” he thought as he made his way to the bathroom.
Flicking on the bathroom light he looked down in horror at his distended stomach, and dropped to his knees as he felt what must be the biggest poop of his life demanding to be released.
<br/>
<br/>

“Oh, hey General Kev! Just wanted to see if you’re ready for war tonight.” said the head of General Stevie “The B” Dowals as it wriggled it’s way out of the Red General’s butt.
<br/>
<br/>

“Stevie..” General Kev sighed. “I know we’re lifelong partners who would never turn on each other, but you really need to find your own place to live..my butt’s getting really sore with you hiding in there all of the time”.
<br/>
<br/>

“But..but Master General Kev, it’s so scary out there on my own, and since we act as one army in war anyway, I don’t see why I should ever have to leave your side.” The Orange General wimpered.
<br/>
<br/>

“I guess you’re right, there’s no point in you leaving now since we’ll be embracing each other on the battlefield in just a few short hours. Go ahead and climb back inside, I’ll let you know when it’s time for War.” sighed General “Hothead” Kev.
</small>

  </p>
</div>

<div className="fullHeight">
<p className="narration-quote">
      <small>"What's an exit strategy?" 
        <br/>
      -DFV</small>
    </p>
    </div>

<div className="fullHeight">
  <p className="story">
    <small>
   <h3>February 12, 2021</h3>
<h5>LOCATION: CLASSIFIED</h5>

“Thanks for meeting with me on such short notice, General. I understand your concerns regarding this matter are as grave as ours.”
<br/>
<br/>
“Indeed, General Dowals,” General Kev replied in earnest. "Someone needs to stop this train before it goes completely off the rails. We’ve got a potential maniac in control of one of the most barbaric, malleable armies in the world.” 
<br/>
<br/>
General Kev proceeded to open his manila folder, revealing a thick stack of intelligence reports labeled <i>THE TAPES</i>. He scanned through the first few pages as General Dowals began to address the strange elephant in the room.
<br/>
<br/>
“His most recent publication may be an indication of the shit hitting the fan, figuratively speaking." General Dowals spared no time for pleasantries. "Why the hell was he watching someone take a shit? And reporting, on the record, on his own hallucinations of the fecal matter <i>speaking?!</i> This is absolutely ludicrous. Are we able to identify the Jr. Lieutenant's location to warn the poor individual of the dangerous, murderous voyeur outside their bathroom window?” 
<br/>
<br/>
“Yes, the Red Army Intelligence Unit was able to locate the Junior Lieutenant on the night of the publication. The transmission was sent from the bumfuck suburbs of Texas, where it’s been reported literally nothing cool ever happens. They might have good BBQ, but at this time even that remains unclear. We believe it to be the new location of the Virus’ base.”
<br/>
<br/>
“General Serg on the move again? What the fuck is he doing in Texas?”
<br/>
<br/>
“Our intelligence is basically clueless regarding the Virus, General Dowals. I wish I had more information. We’ve had very little intel on him this entire war, and frankly he’s too unruly to negotiate with. We don’t know what he’s planning, or what his next move might be. All we can derive at this moment with 99% certainty is that Junior Lieutenant 'the' Caso is watching The Virus while he takes his morning shits. We presume the Virus is unaware of the Jr. Lieutenant’s disgusting activity, at least at the time of the transmission.” 
General Kev sighed, silently acknowledging the countless hours his intelligence team had dedicated to these disturbing findings, all in good faith. 
“For the sake of post-war peace and the overall good of the world, we have no choice but to team up and put an end to this madness, General Dowals. We cannot let maniacs like the Jr. Lieutenant roam free, unchallenged. The great people of this world are depending on us. The post-war recovery will be difficult enough as is.”
<br/>
<br/>
“I’m no advocate for secret alliances, General Kev, but it seems the die has been cast. Why don’t we alert the other nations and form a global committee? The whole world has felt perturbed by the Junior Lieutenant’s actions throughout the war. Surely they’ll agree to help us nip this in the bud while we still can. He thought The Virus’ excrement was <i>talking</i>, for fuck’s sake. He’s been rocketing towards the moon of insanity ever since he murdered that old Blue superior.”
<br/>
<br/>
“We don’t know whom else to trust,” General Kev replied convincingly. “The RAIU has determined your Orange army is the only organization we can rely on. The entire Blue army is in disarray, and it is difficult to identify which nations will accept the desperate backdoor deals being proposed by the corrupt, disintegrating Blue army factions. Not all nations understand that joint takedowns of evil are more important than any individual nation's victory.” 
If the mounds of records in the Red army leader’s arms weren’t convincing enough, it was clear from General Kev’s demeanor that there were no other options. “We must form an alliance, General Dowals. For the good of <i>every single</i> living being on this planet.”
<br/>
<br/>
General Dowals paused before his next move. He knew what he had to do, but understood this would not be well perceived amongst the other nations. The warring armies had already been suspicious of some sort of Red/Orange contractual agreement, despite the records showing no such accord. Alas, there was no choice at this juncture. 
<br/>
<br/>
“Ok I’m in, if only for the good of those who have already suffered enough from this horrible war. What kind of sick bastard watches someone take shits? That kind of human cannot be given the opportunity to prey on the fragility of a post-war world. We don’t know what kind of chaos this irrational insanity may incite. In the words of the great Jim Lahey, 'there's a shitnado coming'. Let’s put an end to this impermissible burning bag of scat, <i>for good</i>.”
<br/>
<br/>
“Glad to see we are in agreement, General. We can only hope the other nations will appreciate our sacrifice once this is all over.”
<br/>
<br/>
The Generals departed with a nod and a handshake, both in disgust at the series of events that had turned a once pants-shitter, into a now shit-watcher. 
<br/>
<br/>
The volatility of war takes peculiar tolls.
</small>
  </p>
  <img src="/classified.png" className="center"></img>


</div>



    <div className="fullHeight">
    <p className="story">
    <small>
   <h3>April 17, 2021</h3>
<h3>War’s Coda, Part I</h3>
A cool, subtle breeze coated the New England territory with what was hoped to be the final snowfall of an indelible winter. The exhausted generals prayed the false spring was not yet another melodramatic metaphor. 
<br/>
<br/>
For months it had seemed the end was within reach. Calls for peace and cool sweatshirts with ‘love’ written on them were becoming omnipresent in a world that had been forever changed. Most of the brave and honorable, who had done their parts to contribute to the greater good throughout the war, eagerly awaited to emerge and build a new life in a mysterious post-war world. The Jr. Lieutenant of the Blue army, still obsessed only with achieving the General’s title, was not a member of this humble tribe.
<br/>
<br/>
...
<br/>
<br/>
“You weak, incompetent, diaper-wearing, sorry excuses for soldiers better clean up, quickly. We have a very important battle tonight,” the Junior Lieutenant barked as he welcomed a tired unit back from their overnight sabotage mission. 
<br/>
<br/>
“Sir, the mission was successful. We were able to terminate all known ice cream within a two mile radius of General Johnson’s Harlem base.”
<br/>
<br/>
“Do you want a trophy for doing your job? Where’s the damn ice cream now?” 
<br/>
<br/>
“Did you check up your butt?” a young recruit confidently shouted from the back row. Nervous chuckles followed as Jr. Lieutenant 'the' Caso locked his eyes on the young soldier and calmly placed his hand on his pistol. 
<br/>
<br/>
“Any last words from the class clown? Perhaps a knock-knock joke? Those are my favorite.” The assembly went silent. Only the sounds of the cool breeze could now be heard. The troops knew the Jr. Lieutenant was on the brink of insanity and had crossed too many lines to count at this point in the war. Most of the blue soldiers lacked any trace of loyalty or patriotism after the shameful atrocities committed by the blue organization. The blue army just wanted to go home.
<br/>
<br/>
The young recruit thought deeply before making his next move.

</small>
</p>

    </div>


<div className="fullHeight">
<p>To be continued...</p>
</div>

<footer>
<p className="disclaimer"><small>The accounts drawn in the description above are all true and factual - old tombs and writings 
  were discovered and vetted through the historical museums of the chambers of forgotten wars. <a href="https://imgur.com/a/IXWxmJW">All rights reserved.</a></small>
  </p>
</footer>
 </div>
  )
}
