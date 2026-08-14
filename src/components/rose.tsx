import "./rose.css";

type RoseProps = {
  size?: number;
  animated?: boolean;
  particles?: boolean;
  className?: string;
};

export function Rose({
  size = 400,
  animated = true,
  particles = false,
  className = "",
}: RoseProps) {
  return (
    <div
      className={["rose", animated ? "rose-animated" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={{
        width: size,
        height: size,
      }}
    >
      {particles && (
        <div className="rose-particles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      )}

      <svg
        className="rose-svg"
        viewBox="0 0 320 360"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Rosa vermelha"
        role="img"
      >
        <defs>
          {/* =====================================================
              PETAL GRADIENTS
          ===================================================== */}

          <radialGradient id="rosePetal" cx="40%" cy="25%" r="80%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="30%" stopColor="#f43f5e" />
            <stop offset="70%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#881337" />
          </radialGradient>

          <radialGradient id="rosePetalLight" cx="35%" cy="20%" r="85%">
            <stop offset="0%" stopColor="#fda4af" />
            <stop offset="35%" stopColor="#fb7185" />
            <stop offset="70%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#9f1239" />
          </radialGradient>

          <linearGradient
            id="rosePetalDark"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="45%" stopColor="#be123c" />
            <stop offset="100%" stopColor="#4c0519" />
          </linearGradient>

          <linearGradient
            id="rosePetalEdge"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#9f1239" />
          </linearGradient>

          {/* =====================================================
              STEM
          ===================================================== */}

          <linearGradient id="roseStem" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14532d" />
            <stop offset="35%" stopColor="#16a34a" />
            <stop offset="55%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>

          {/* =====================================================
              LEAVES
          ===================================================== */}

          <linearGradient id="roseLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="45%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>

          {/* =====================================================
              HIGHLIGHT
          ===================================================== */}

          <radialGradient id="roseHighlight">
            <stop offset="0%" stopColor="white" stopOpacity="0.55" />

            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          {/* =====================================================
              SHADOW
          ===================================================== */}

          <linearGradient id="roseShadow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4c0519" stopOpacity="0" />

            <stop offset="100%" stopColor="#4c0519" stopOpacity="0.65" />
          </linearGradient>

          <filter
            id="roseShadowFilter"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="5"
              floodColor="#4c0519"
              floodOpacity="0.3"
            />
          </filter>

          {/* =====================================================
              GROUND SHADOW
          ===================================================== */}

          <radialGradient id="groundShadow">
            <stop offset="0%" stopColor="#14532d" stopOpacity="0.35" />

            <stop offset="100%" stopColor="#14532d" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* =====================================================
            GROUND
        ===================================================== */}

        <ellipse
          className="rose-ground"
          cx="150"
          cy="330"
          rx="75"
          ry="13"
          fill="url(#groundShadow)"
        />

        {/* Pequeno pedaço de terra */}
        <path
          className="rose-soil"
          d="
            M65 326
            C90 321 115 323 140 326
            C165 329 192 322 225 327
          "
          fill="none"
          stroke="#365314"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* =====================================================
            PLANT
        ===================================================== */}

        <g className="rose-plant">
          {/* ===================================================
              STEM
          =================================================== */}

          <g className="rose-stem">
            <path
              className="stem-main"
              d="
                M143 326
                C145 300 149 278 153 255
                C158 225 160 198 160 170
              "
              fill="none"
              stroke="url(#roseStem)"
              strokeWidth="10"
              strokeLinecap="round"
            />

            {/* Brilho do caule */}
            <path
              className="stem-highlight"
              d="
                M147 319
                C149 291 153 270 157 248
                C160 220 161 198 161 181
              "
              fill="none"
              stroke="#4ade80"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.45"
            />

            {/* Espinhos */}
            <path
              className="thorn thorn-one"
              d="M153 250 L141 243 L153 241"
              fill="#166534"
            />

            <path
              className="thorn thorn-two"
              d="M148 289 L137 283 L149 280"
              fill="#166534"
            />
          </g>

          {/* ===================================================
              LEFT LEAF
          =================================================== */}

          <g className="rose-leaf rose-leaf-left">
            <path
              d="
                M153 250
                C128 232 94 230 67 248
                C89 265 126 266 153 250
                Z
              "
              fill="url(#roseLeaf)"
            />

            {/* Nervura principal */}
            <path
              d="
                M150 250
                C123 249 96 249 71 249
              "
              fill="none"
              stroke="#14532d"
              strokeWidth="2"
              opacity="0.7"
            />

            {/* Nervuras */}
            <path
              d="M109 249 L96 238"
              stroke="#166534"
              strokeWidth="1.5"
              opacity="0.5"
            />

            <path
              d="M124 249 L113 236"
              stroke="#166534"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </g>

          {/* ===================================================
              RIGHT LEAF
          =================================================== */}

          <g className="rose-leaf rose-leaf-right">
            <path
              d="
                M153 276
                C178 252 211 250 237 264
                C216 284 181 287 153 276
                Z
              "
              fill="url(#roseLeaf)"
            />

            {/* Nervura */}
            <path
              d="
                M158 275
                C184 271 209 268 231 265
              "
              fill="none"
              stroke="#14532d"
              strokeWidth="2"
              opacity="0.7"
            />

            {/* Nervuras */}
            <path
              d="M190 270 L200 258"
              stroke="#166534"
              strokeWidth="1.5"
              opacity="0.5"
            />

            <path
              d="M205 268 L216 258"
              stroke="#166534"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </g>

          {/* ===================================================
              BUD
          =================================================== */}

          <g className="rose-bud">
            {/* Cálice do botão */}
            <path
              d="
                M145 178
                C150 168 170 168 175 178
                L170 190
                L160 184
                L150 190
                Z
              "
              fill="#166534"
            />

            {/* Botão */}
            <path
              className="bud-body"
              d="
                M145 174
                C145 154 151 142 160 139
                C169 142 175 154 175 174
                C168 181 152 181 145 174
                Z
              "
              fill="url(#rosePetalDark)"
            />

            {/* Pequeno brilho */}
            <ellipse
              className="bud-highlight"
              cx="153"
              cy="151"
              rx="7"
              ry="11"
              fill="url(#roseHighlight)"
              transform="rotate(-20 153 151)"
            />
          </g>

          {/* ===================================================
              FLOWER
          =================================================== */}

          <g className="rose-flower" filter="url(#roseShadowFilter)">
            {/* Pétala externa esquerda */}
            <g className="petal-group petal-outer-left">
              <path
                d="
                  M160 180
                  C125 182 88 163 78 131
                  C69 102 86 72 113 67
                  C103 95 116 126 160 146
                  Z
                "
                fill="url(#rosePetalDark)"
              />
            </g>

            {/* Pétala externa direita */}
            <g className="petal-group petal-outer-right">
              <path
                d="
                  M160 180
                  C195 182 232 163 242 131
                  C251 102 234 72 207 67
                  C217 95 204 126 160 146
                  Z
                "
                fill="url(#rosePetalDark)"
              />
            </g>

            {/* Pétala traseira esquerda */}
            <g className="petal-group petal-back-left">
              <path
                d="
                  M160 153
                  C134 138 113 111 119 82
                  C124 55 149 40 171 55
                  C185 65 180 91 165 109
                  C156 121 153 139 160 153
                  Z
                "
                fill="url(#rosePetalLight)"
              />
            </g>

            {/* Pétala traseira direita */}
            <g className="petal-group petal-back-right">
              <path
                d="
                  M160 153
                  C186 138 207 111 201 82
                  C196 55 171 40 149 55
                  C135 65 140 91 155 109
                  C164 121 167 139 160 153
                  Z
                "
                fill="url(#rosePetalLight)"
              />
            </g>

            {/* Pétala intermediária esquerda */}
            <g className="petal-group petal-middle-left">
              <path
                d="
                  M160 169
                  C136 163 113 146 106 122
                  C100 101 112 83 130 85
                  C148 87 155 106 160 129
                  Z
                "
                fill="url(#rosePetal)"
              />
            </g>

            {/* Pétala intermediária direita */}
            <g className="petal-group petal-middle-right">
              <path
                d="
                  M160 169
                  C184 163 207 146 214 122
                  C220 101 208 83 190 85
                  C172 87 165 106 160 129
                  Z
                "
                fill="url(#rosePetal)"
              />
            </g>

            {/* Pétala interna esquerda */}
            <g className="petal-group petal-inner-left">
              <path
                d="
                  M160 164
                  C147 158 137 145 138 130
                  C139 116 147 106 157 109
                  C166 112 167 126 160 142
                  Z
                "
                fill="url(#rosePetalEdge)"
              />
            </g>

            {/* Pétala interna direita */}
            <g className="petal-group petal-inner-right">
              <path
                d="
                  M160 164
                  C173 158 183 145 182 130
                  C181 116 173 106 163 109
                  C154 112 153 126 160 142
                  Z
                "
                fill="url(#rosePetalEdge)"
              />
            </g>

            {/* Miolo */}
            <g className="petal-group petal-center">
              <path
                d="
                  M160 159
                  C150 153 146 143 150 132
                  C154 121 165 118 171 126
                  C177 134 173 146 164 151
                  C159 154 158 157 160 159
                  Z
                "
                fill="url(#rosePetalDark)"
              />

              <path
                d="
                  M160 151
                  C155 147 154 140 157 136
                  C160 132 165 133 167 137
                  C169 142 166 147 160 151
                  Z
                "
                fill="#4c0519"
                opacity="0.8"
              />
            </g>

            {/* Sombras */}
            <path
              d="
                M107 125
                C119 142 137 153 157 158
                L157 168
                C133 163 113 147 107 125
                Z
              "
              fill="url(#roseShadow)"
              opacity="0.35"
            />

            <path
              d="
                M213 125
                C201 142 183 153 163 158
                L163 168
                C187 163 207 147 213 125
                Z
              "
              fill="url(#roseShadow)"
              opacity="0.35"
            />

            {/* Brilhos */}
            <ellipse
              cx="132"
              cy="78"
              rx="24"
              ry="12"
              fill="url(#roseHighlight)"
              transform="rotate(-30 132 78)"
            />

            <ellipse
              cx="188"
              cy="78"
              rx="18"
              ry="9"
              fill="url(#roseHighlight)"
              transform="rotate(30 188 78)"
              opacity="0.3"
            />
          </g>

          {/* ===================================================
              CALYX
          =================================================== */}

          <g className="rose-calyx">
            <path
              d="
                M137 169
                L148 190
                L160 177
                L172 190
                L183 169
                L176 181
                C166 188 154 188 144 181
                Z
              "
              fill="#166534"
            />

            <path
              d="M148 181 L153 172"
              stroke="#22c55e"
              strokeWidth="2"
              opacity="0.5"
            />

            <path
              d="M172 181 L167 172"
              stroke="#22c55e"
              strokeWidth="2"
              opacity="0.5"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
