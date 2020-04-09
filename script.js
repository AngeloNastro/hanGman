const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const LINK = "https://angelonastro.github.io/hanGman/";

const figureParts = document.querySelectorAll('.figure-part');

const words = ["hombres","tanka","tripper","housework","lambada","trunnions","uninviting","pelagics","windshield","enticingly","livyer","verticalities","explanation","orderlies","insulate","italics","sixty","sparkling","cuttingly","electroosmosis","trendinesses","deadlined","caseinates","whizzbang","ashtray","tews","apatetic","agamospermies","overutilization","primi","easts","decisioning","inhalants","gonadal","hugely","strep","dolphinfishes","sclaff","piling","unconquerably","freelance","outglittered","hexyls","future","linger","lysogenizations","punitory","microseism","sodomitic","margravial","superboards","tumors","calvariums","agrias","englishes","primness","slapper","nonplayer","framable","prestoring","fogginesses","cranky","antisubmarine","unsoured","roof","outwatches","kerplunks","lastborn","drat","quaestor","chagrined","aniseikonia","batiking","oilinesses","walkups","metalizes","consciouses","mechanizable","satrap","masticate","trekker","nasalizing","beleaguering","cowbane","ganoid","outpreaches","pixillated","nitrofurans","cagelike","repossessors","flacons","skatings","chronographies","padri","decease","refulgence","niderings","algicide","reshingled","bedells","blockable","floriculture","subchapter","divider","masseurs","chorals","duplicitously","intreated","withindoors","outcompete","incense","discrepancy","tantalite","influenzas","empaneling","rewearing","ratline","creosotic","inpatient","reptile","courgette","pupillages","vindictively","birianis","regalers","becrawls","ceremonialisms","quadriphonic","catachresis","penultimas","highborn","tangent","teemingly","documentations","meditations","panhuman","nonevidences","gooier","unaxed","vaulter","flimflamming","widthway","vivisected","nurturance","enneagons","greenish","toothlike","tubbing","janitor","proofer","zoography","gabbarts","discoloration","uneager","gastronomic","outgnaws","canoeists","leva","ravenousness","priciest","hadji","dimerizes","tailboard","taro","buoyance","helicopt","alveolate","grommeting","thrillers","roturiers","cymbaleer","decadal","lianas","scrimmaging","ruddier","dolefully","unchairing","contessas","osculatory","turret","flunk","disking","pipal","enemas","sierra","carousels","swizzle","redyes","expatiates","contradicting","wondrousness","cravers","overstretched","modifications","drawstring","skidder","bacchantes","woodchats","inevitable","chuppahs","keggers","externe","thermophiles","overdoes","enokidakes","strobes","sericulturist","tramontanes","ledgy","nonequals","convexly","yaffing","jeans","haggardnesses","heathy","horoscopy","edibleness","overhunt","metatheses","heavenliest","societies","berk","terpinols","essentialities","heterothallic","invincible","homonym","hoicked","spintos","polemizing","austerely","pentahedra","origamis","shorthair","crunchiness","introverting","paranoically","trembliest","foists","dynamical","ebb","sulphured","strowing","streptothricins","metallographic","foxtrot","asbestic","lins","nonaddictive","hydroxyapatite","curtseying","bagatelle","coroneted","lipoidal","hyperlinks","booboos","tapioca","centrosymmetric","dupable","nepenthes","tideways","doors","swellheadedness","colemanite","telecommuters","collodion","adorns","wedder","ducally","percolation","cantles","hypothecator","tor","virls","madeiras","mothier","tabbing","misgrew","prechills","lipolysis","noshes","jasmines","cheering","erythemic","setoffs","nonillions","courtezans","oscillators","dispending","sloids","outrooted","tremulous","cellulars","fluorination","erigeron","tympanal","meister","trank","deplorer","petnap","nuptial","substance","overbaked","cressy","winsomeness","pinner","shortchanging","mechanist","kvetcher","inswathing","baroscope","advising","ropedancer","prebless","hapkido","tye","cardiopathy","yolks","wreckings","muddied","halakic","thinners","biner","locators","aurora","compel","thirams","delocalizations","camphorating","veterinarian","bugginesses","stockages","hypophysial","liftgate","consecrated","acquittance","uncrosses","mugfuls","reestablishing","biocides","bootlicked","unsteadinesses","rickets","evaporating","infighting","excerpt","inflict","initiators","underwriting","felonies","drecky","smudgiest","calentures","claustrophobe","waxers","schmoos","somnolence","supermasculine","mishear","nailed","outshames","vignettists","amylopsins","cavalletti","leakproof","parallelogram","dischargeable","infantas","lollypops","haughty","mistutor","concessively","skyscrapers","valerians","citriculturist","uncute","crispheads","primates","birdfarms","archaical","stomodaeal","maximites","renews","gaminess","aposematically","agorot","subspecializing","freestyle","seatmates","proficiencies","dendrons","sulkiest","marishes","rearoused","upturned","maydays","salesgirls","hellkites","allopatry","biquadratics","destructible","volte","hypercalcemia","outsold","glossolalist","crunchiest","idealess","multiplicities","verifier","treelawns","gorgets","ecclesiastic","walkathons","hilloa","betelnut","spelts","episcopates","injury","authenticators","antimusics","coalyards","antipole","cheated","sundresses","euphoniums","potline","epiclike","unknowabilities","outpity","demythologize","quietens","tanuki","techiest","laagers","caseates","awoken","airliner","moll","admeasured","sudatorium","reserved","oilcamps","workwomen","ranees","tumpline","hamlet","summarised","routeway","dacites","moil","sanguinenesses","ginny","leaks","masquer","realizes","nineteenth","deadlier","schoolkid","muzzles","musjids","rotis","sublicenses","impledging","lonely","ballies","jeepneys","elains","mentalists","mediumistic","recontaminating","pearl","mridanga","dominicker","introfied","swordtails","starlights","implementing","borsches","habituation","horticulture","vitellogeneses","unlades","anisotropies","naganas","braidings","leucitic","subleasing","coteries","helictites","esotericism","nitrogenase","bopped","antiquary","ropes","isosmotically","penholders","biopsied","rimlands","rocking","gibed","videolands","apicultural","sigils","paleogene","epilogue","refractiveness","labouring","birdman","taskmasters","etherealnesses","backhanded","bluestockings","thrashings","subliterary","login","loggerhead","relanding","gesso","atoned","aliteracies","outasked","gipons","swankiest","engendered","megaton","gelatinousness","stimulated","ladyhood","risking","crushproof","hearsays","hormonal","hoper","theocrat","detruding","compassion","parotitis","graven","sloppinesses","stokehold","arrantly","dysrhythmic","geometrid","rekeyboard","vigour","declensional","illuming","dourahs","wideband","nightclubbers","speises","wasters","auspices","clamoured","surprizes","philharmonics","instals","apomictically","humidify","schoolbooks","computers","affectation","surimi","bustic","riles","intransigeance","illiberalities","ingles","alehouses","minciest","windgalls","reveled","plagiarized","zithers","installment","patinize","shillelah","gynarchic","conjoined","gripped","papist","insufflate","nonsecure","higgler","haem","scabbles","mispoises","polyenic","pats","patronages","presumer","sifters","apostacy","sandbur","iterances","foresighted","demisable","hieroglyphs","poutful","unribbed","depilation","impetigos","gentrified","unjustifiably","haulier","ptomaines","noncommittally","kalamata","grammars","mischannelled","reconditioning","interstrain","providently","thicken","gleek","emblematical","effecting","stenokies","overlords","bienniums","rubying","decalogues","disinvestment","antileukemic","defocusses","spans","accruement","revisionist","vines","radiational","psychiatrically","volublenesses","reefs","debarking","englished","flatwash","reconsult","cultivations","professorships","involucral","propriety","outkicking","kyes","mazier","magnetically","undersupplies","stibial","medicinally","inflamers","piggy","pulverulent","dichotic","benefaction","mainland","shepherdess","burlaps","reclaimable","yeastinesses","genealogies","ailurophiles","coenduring","insolvably","dazes","championships","antiestrogens","heartlessnesses","indrafts","unsoiled","carjack","ceremoniousness","hassocks","superschools","valiances","thrilling","citizenries","impone","nonearning","ineloquent","gallicas","antithetically","heterolyses","thymosins","criminating","luteins","softwood","entombment","slowpoke","gan","speciates","valedictorians","nutritive","snash","heaves","gonfanon","ethicians","hogging","nonmagnetic","equilibria","rarifying","postrider","scalpels","sophs","barograms","reactionaryism","derogated","siree","interphase","newsman","interdepending","tangram","jamming","boilers","anemically","rubel","greenery","vaporousness","squinnies","antres","chartists","broche","array","locule","actual","redeliver","persecutes","apterous","lauan","permits","neocolonialism","teinds","bawlers","buck","nectaries","polemizes","underruns","tweaking","debone","skinheads","burros","drily","gentrifiers","vatting","tavs","gazetteers","ingate","snowmaker","opposing","unpastoral","luckie","manhandle","hydroxylate","frowns","axolotl","overflow","potherbs","doodads","euglobulins","dhooly","tachismes","emirates","impalpably","phi","hydathodes","aperitifs","aparejos","circularization","allegers","nouveau","moisturises","finlike","wheeled","padlocks","zoolatries","rebecs","attractiveness","tun","squabbled","frightfulnesses","statelessnesses","polders","subwriter","migrant","squishiest","vistaed","adeptest","senilities","spumes","cadges","prehensions","misguidance","unmaliciously","accidents","flosses","thermic","exemplum","picowaves","metalmarks","retapes","dustbins","sylvanite","dysphasia","clergymen","currycombing","exemplify","tentorial","nontraditional","secondarily","interdiffusing","synizesis","satisfyingly","trickishly","cowing","redriving","megaphoned","periled","dhurrie","taekwondos","urbs","unlawfully","anticoagulants","monellin","disrelated","hayrick","seater","resurfacers","unclarity","soapwort","pushiest","unpackers","bluenesses","humorist","schnoz","numskull","mallee","pastorate","noo","mythomaniacs","karateists","cheesier","levantines","latinizes","maumetries","pyramiding","eristical","thalers","ninnies","panicking","stogey","siderite","lively","bencher","peptizes","spaetzle","sylvine","fickler","schematization","ageing","discursively","librae","whipstitching","genius","buteonines","bagatelles","refresher","refected","procurable","isentropically","harmins","rhapsodizing","camping","metroplex","celebrates","pastors","unrebuked","cramoisie","assister","bandoleers","repolling","intentions","dramedies","bubbled","primatologists","cued","pacification","trones","changelessly","roughening","undulatory","exsanguination","wiregrass","limners","hasteful","stitch","isometry","preabsorbing","cyanocobalamine","fetoproteins","huntsmen","sandblast","realer","encrustation","slaps","reticula","temperer","reflexions","airns","mufti","plea","beslaved","banish","intensivenesses","wiseguys","waiving","unmesh","toelike","bludges","hallel","cerates","zipped","meningococci","peacekeepers","trierarch","microliths","comets","nasalism","aspics","reevaluates","pipelining","disenchanter","equivocated","chases","osteological","restiveness","unpick","fauns","satellite","beaters","bobolinks","apostatize","reveries","multipicture","tambacs","vesuvians","presynaptic","pararosanilines","hillinesses","mislit","debauchees","coupled","industrialise","pluvial","halakah","incommunicable","catgut","rusted","metheglin","outhandled","emitters","bootlegs","micrographing","glycosylation","seleniums","crevassing","balder","chthonian","cohabitation","domesticity","connubialisms","rattling","carbonado","malemutes","tenaciousnesses","rappel","ulpanim","hydroponics","palaverers","distraints","corbelling","popularized","outjutting","peregrinate","complecting","farcie","gaposises","per","hobble","kenneling","radiotelemetric","brachiopod","repleading","mir","underworlds","multiscreen","discreditably","cultivars","leaved","preponderating","tittuppy","unspiritual","toured"]

let selectedWord = words[Math.floor(Math.random() * words.length)];
document.getElementById("cheater").innerHTML = selectedWord + "  😈";

// document.getElementById("cheater").style.display = "block";		//uncomment to be a cheater!
const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function displayWord() {
	wordEl.innerHTML = `
    ${selectedWord
			.split('')
			.map(
				letter => `
          <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
          </span>
        `
			)
			.join('')}
  `;

	const innerWord = wordEl.innerText.replace(/\n/g, '');

	if (innerWord === selectedWord) {
		finalMessage.innerText = 'Congratulations! You won! 😃';
		popup.style.display = 'flex';
    }
}

// Update the wrong letters
function updateWrongLettersEl() {
	// Display wrong letters
	wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;

	// Display parts
	figureParts.forEach((part, index) => {
		const errors = wrongLetters.length;

		if (index < errors) {
			part.style.display = 'block';
		} else {
			part.style.display = 'none';
		}
	});

	// Check if lost
	if (wrongLetters.length === figureParts.length) {
		finalMessage.innerText = 'Unfortunately you lost. 😕';
		popup.style.display = 'flex';
	}
}

// Show notification
function showNotification() {
	notification.classList.add('show');

	setTimeout(() => {
		notification.classList.remove('show');
	}, 2000);
}

function copyLink(){
	navigator.clipboard.writeText(LINK).then(function() {
	/* clipboard successfully set */
	}, function() {
	/* clipboard write failed */
	});
}

// Keydown letter press
window.addEventListener('keydown', e => {
	// console.log(e.keyCode);
	if (e.keyCode >= 65 && e.keyCode <= 90) {
		const letter = e.key.toLowerCase();

		if (selectedWord.includes(letter)) {
			if (!correctLetters.includes(letter)) {
				correctLetters.push(letter);

				displayWord();
			} else {
				showNotification();
			}
		} else {
			if (!wrongLetters.includes(letter)) {
				wrongLetters.push(letter);

				updateWrongLettersEl();
			} else {
				showNotification();
			}
		}
	}
});

// Restart game and play again
playAgainBtn.addEventListener('click', () => {
	//  Empty arrays
	correctLetters.splice(0);
	wrongLetters.splice(0);

	selectedWord = words[Math.floor(Math.random() * words.length)];

	displayWord();

	updateWrongLettersEl();

	popup.style.display = 'none';
	document.getElementById("cheater").innerHTML = selectedWord;
});

displayWord();